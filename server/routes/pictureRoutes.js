const express = require('express')
const router = express.Router()
const pictureController = require("../controllers/pictureController")

router.get("/pictures", pictureController.get_picture)
router.put("/pictures/updatePicture/:id", pictureController.update_picture)
router.post("/pictures/createPicture", pictureController.create_picture)
router.delete("/pictures/deletePicture/:id", pictureController.delete_picture)

module.exports = router