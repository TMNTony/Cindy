"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const videoController_1 = __importDefault(require("../controllers/videoController"));
router.get("/videos", videoController_1.default.get_videos);
router.post("/videos/createVideo", videoController_1.default.create_video);
router.put("/videos/updateVideo/:id", videoController_1.default.update_video);
router.delete("/videos/deleteVideo/:id", videoController_1.default.delete_video);
module.exports = router;
