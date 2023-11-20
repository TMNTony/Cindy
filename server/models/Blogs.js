const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String
})

const blogModel = mongoose.model("blogs", blogSchema)

module.exports = blogModel