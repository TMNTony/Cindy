import express, { Router } from 'express';
const router: Router = express.Router();
import blogController from '../controllers/blogController';

router.get("/blogs", blogController.get_blogs)
router.get("/blogs/:id", blogController.get_blog)
router.post("/blogs/createBlog", blogController.create_blog)
router.put("/blogs/updateBlog/:id", blogController.update_blog)
router.delete("/blogs/deleteBlog/:id", blogController.delete_blog)

export = router;