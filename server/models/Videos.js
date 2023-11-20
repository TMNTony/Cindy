const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
    videoURL: String,
    caption: String
})

const videoModel = mongoose.model("videos", videoSchema)

module.exports = videoModel