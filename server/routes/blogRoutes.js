const express = require('express')
const router = express.Router()
const blogController = require("../controllers/blogController")

router.get("/", blogController.get_blogs)
router.get("/getblog/:id", blogController.get_blog)
router.post("/createblog", blogController.create_blog)
router.put("/updateblog/:id", blogController.update_blog)
router.delete("/deleteblog/:id", blogController.delete_blog)

module.exports = router;