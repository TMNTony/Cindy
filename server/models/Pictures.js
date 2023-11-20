const mongoose = require("mongoose")

const pictureSchema = mongoose.Schema({
    pictureURL: String,
    caption: String
})

const pictureModel = mongoose.model("gallery", pictureSchema)

module.exports = pictureModel