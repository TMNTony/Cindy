import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios, { AxiosResponse } from 'axios';


interface ErrorResponse {
    success: boolean;
    message: string;
}

interface VerificationData {
    success?: boolean;
}

const router: Router = express.Router();

router.use(bodyParser.json());

router.post('/verify-recaptcha', async (req: Request, res: Response) => {
    try {
        const recaptchaToken = req.body.recaptchaToken;
        const recaptchaSecret: string = "6Lc5f0opAAAAAM06HMQeGq7-TXI-7ekp2EkQAQ6e";

        if (!recaptchaSecret) {
            throw new Error('RECAPTCHA_SECRET is not defined in the environment variables.');
        }

        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

        const response: AxiosResponse<VerificationData> = await axios.post(verificationURL);

        if (response.data.success) {
            res.json({ success: true });
        } else {
            // Verification failed
            const errorResponse: ErrorResponse = { success: false, message: 'reCAPTCHA verification failed' };
            res.status(400).json(errorResponse);
        }
    } catch (error: any) {
        console.error('Error in reCAPTCHA verification:', error.message);
        const errorResponse: ErrorResponse = { success: false, message: 'Internal server error during reCAPTCHA verification' };
        res.status(500).json(errorResponse);
    }
});

export = router;
