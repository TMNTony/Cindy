import blogModel = require("../models/Blogs")
import { Request, Response } from 'express';
import { Document, Model } from 'mongoose';

const getBlogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const blogs: blogModel[] = await blogModel.find({});
        res.json(blogs);
    } catch (err) {
        res.json({ error: err.message || 'An error occurred' });
    }
};

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
        date: res.body.date,
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