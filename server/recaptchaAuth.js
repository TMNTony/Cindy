"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
router.use(body_parser_1.default.json());
router.post('/verify-recaptcha', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recaptchaToken = req.body.recaptchaToken;
        const recaptchaSecret = "6Lc5f0opAAAAAM06HMQeGq7-TXI-7ekp2EkQAQ6e";
        if (!recaptchaSecret) {
            throw new Error('RECAPTCHA_SECRET is not defined in the environment variables.');
        }
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
        const response = yield axios_1.default.post(verificationURL);
        if (response.data.success) {
            res.json({ success: true });
        }
        else {
            // Verification failed
            const errorResponse = { success: false, message: 'reCAPTCHA verification failed' };
            res.status(400).json(errorResponse);
        }
    }
    catch (error) {
        console.error('Error in reCAPTCHA verification:', error.message);
        const errorResponse = { success: false, message: 'Internal server error during reCAPTCHA verification' };
        res.status(500).json(errorResponse);
    }
}));
module.exports = router;
