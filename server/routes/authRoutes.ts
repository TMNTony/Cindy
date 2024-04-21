import express, { Router } from 'express';
const router: Router = express.Router();
import userController from '../controllers/authController'

router.post("/login", userController.login)
router.post("/register", userController.register)

export = router