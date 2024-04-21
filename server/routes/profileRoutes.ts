import express, { Router } from 'express';
const router: Router = express.Router();
import profileController from "../controllers/profileController";

router.get("/profile", profileController.getProfile)
router.put("/profile/updateProfile", profileController.updateProfile)

export = router