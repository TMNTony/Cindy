import axios from 'axios';

const url = "http://localhost:3001"
const recaptchaService = {
    async verifyRecaptcha(recaptchaToken) {
        try {
            const response = await axios.post(url + '/verify-recaptcha', { recaptchaToken });

            if (response.data.success) {
                // Recaptcha verification successful
                return true;
            } else {
                // Recaptcha verification failed
                console.error('Recaptcha verification failed:', response.data.message);
                return false;
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error in recaptchaService:', error.message);
            return false;
        }
    },
};

export default recaptchaService;