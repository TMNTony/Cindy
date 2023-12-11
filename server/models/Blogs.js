const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    date: String,
    content: String
})

const blogModel = mongoose.model("blogs", blogSchema)

module.exports = blogModel