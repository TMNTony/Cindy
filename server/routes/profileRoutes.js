const express = require('express')
const router = express.Router()
const profileController = require("../controllers/profileController")

router.get("/profile", profileController.getProfile)
router.put("/profile/updateProfile/:id", profileController.updateProfile)
router.post("/profile/createProfile", profileController.createProfile)
router.delete("/profile/deleteProfile/:id", profileController.deleteProfile)

module.exports = router