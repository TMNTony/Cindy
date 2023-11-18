const blogModel = require("../models/Blogs")

const get_blogs = (req, res) => {
    blogModel.find({})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
}

const get_blog = (req, res) => {
    const id = req.params.id
    blogModel.findById({_id: id})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
}

const create_blog

const update_blog

const delete_blog

module.exports = {
    get_blog,
    get_blogs,
    create_blog,
    update_blog,
    delete_blog
}