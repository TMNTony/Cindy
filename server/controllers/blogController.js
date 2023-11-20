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

const create_blog = (req, res) => {
    blogModel.create(req.body)
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
}

const update_blog = (req, res) => {
    const id = req.params.id
    blogModel.findByIdAndUpdate({_id: id}, {
        title: res.body.title,
        description: res.body.description,
        content: res.body.content
    })
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
}

const delete_blog = (req, res) => {
    const id = req.params.id
    blogModel.findByIdAndDelete({_id: id})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
}

module.exports = {
    get_blog,
    get_blogs,
    create_blog,
    update_blog,
    delete_blog
}