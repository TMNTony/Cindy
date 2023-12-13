"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const uploadController_1 = __importDefault(require("../controllers/uploadController"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.get("/upload", uploadController_1.default.get_images);
// router.post("/upload", uploadController.upload_image)
router.delete("/upload/deleteImage/:id", uploadController_1.default.delete_image);
router.put("/upload/updateImage/:id", uploadController_1.default.update_image);
router.post("/upload", upload.single("testImage"), uploadController_1.default.upload_image);
module.exports = router;
