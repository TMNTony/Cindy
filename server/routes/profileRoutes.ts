import express, { Router } from 'express';
const router: Router = express.Router();
import profileController from "../controllers/profileController";

router.get("/profile", profileController.getProfile)
router.put("/profile/updateProfile/:id", profileController.updateProfile)
router.post("/profile/createProfile", profileController.createProfile)
router.delete("/profile/deleteProfile/:id", profileController.deleteProfile)

export = router