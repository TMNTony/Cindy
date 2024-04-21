"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const blogController_1 = __importDefault(require("../controllers/blogController"));
router.get("/blogs", blogController_1.default.get_blogs);
router.get("/blogs/:id", blogController_1.default.get_blog);
router.post("/blogs/createBlog", blogController_1.default.create_blog);
router.put("/blogs/updateBlog/:id", blogController_1.default.update_blog);
router.delete("/blogs/deleteBlog/:id", blogController_1.default.delete_blog);
module.exports = router;
