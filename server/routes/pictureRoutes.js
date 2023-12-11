"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const pictureController_1 = __importDefault(require("../controllers/pictureController"));
router.get("/pictures", pictureController_1.default.get_picture);
router.put("/pictures/updatePicture/:id", pictureController_1.default.update_picture);
router.post("/pictures/createPicture", pictureController_1.default.create_picture);
router.delete("/pictures/deletePicture/:id", pictureController_1.default.delete_picture);
module.exports = router;
