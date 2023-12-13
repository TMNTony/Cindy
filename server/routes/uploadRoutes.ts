import express, {Request, Router} from 'express';
const router: Router = express.Router();
import uploadController from '../controllers/uploadController'
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

router.get("/upload", uploadController.get_images)
// router.post("/upload", uploadController.upload_image)
router.delete("/upload/deleteImage/:id", uploadController.delete_image)
router.put("/upload/updateImage/:id", uploadController.update_image)
router.post("/upload", upload.single("testImage"), uploadController.upload_image);

export = router