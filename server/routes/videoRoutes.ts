import express, { Router } from 'express';
const router: Router = express.Router();
import videoController from "../controllers/videoController"

router.get("/videos", videoController.get_videos)
router.post("/videos/createVideo", videoController.create_video)
router.put("/videos/updateVideo/:id", videoController.update_video)
router.delete("/videos/deleteVideo/:id", videoController.delete_video)

export = router