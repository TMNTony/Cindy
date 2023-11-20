const mongoose = require("mongoose")

const profileSchema = mongoose.Schema({
    profilePicURL: String,
    bio: String,
    about: String,
    philosophy: String
})

const profileModel = mongoose.model("profile", profileSchema)

module.exports = profileModel