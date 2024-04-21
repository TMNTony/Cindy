import express, {Request, Router} from 'express';
const router: Router = express.Router();
import imageController from '../controllers/imageController'
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router.get("/upload", imageController.get_images)
router.delete("/upload/deleteImage/:id", imageController.delete_image)
router.put("/upload/updateImage/:id", imageController.update_image)
router.post("/upload", upload.single("image"), imageController.upload_image);

export = router