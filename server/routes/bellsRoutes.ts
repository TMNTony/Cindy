import express, { Router } from 'express';
const router: Router = express.Router();
import bellsController from "../controllers/bellsController";

router.get("/bells", bellsController.get_content)
router.put("/bells/updateContent", bellsController.update_content)

export = router