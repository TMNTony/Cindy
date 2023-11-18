const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String
})

const blogModel = mongoose.models("blogs", blogSchema)

module.exports = blogModel