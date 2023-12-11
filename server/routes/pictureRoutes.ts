import express, { Router } from 'express';
const router: Router = express.Router();
import pictureController from "../controllers/pictureController"

router.get("/pictures", pictureController.get_picture)
router.put("/pictures/updatePicture/:id", pictureController.update_picture)
router.post("/pictures/createPicture", pictureController.create_picture)
router.delete("/pictures/deletePicture/:id", pictureController.delete_picture)

export = router