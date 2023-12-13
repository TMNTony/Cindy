import express, {Request, Router} from 'express';
const router: Router = express.Router();
import imageController from '../controllers/imageController'
import multer from "multer";


const storage: multer.StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        cb(null, "uploads");
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
        cb(null, file.originalname);
    },
});

const upload: multer.Multer = multer({storage: storage})

router.get("/upload", imageController.get_images)
// router.post("/upload", imageController.upload_image)
router.delete("/upload/deleteImage/:id", imageController.delete_image)
router.put("/upload/updateImage/:id", imageController.update_image)
router.post("/upload", upload.single("testImage"), imageController.upload_image);

export = router