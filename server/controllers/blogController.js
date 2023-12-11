"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Blogs_1 = require("../models/Blogs");
const get_blogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield Blogs_1.blogModel.find({});
        res.status(200).json(blogs);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const get_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const blog = yield Blogs_1.blogModel.findById({ _id: id });
        if (blog) {
            res.status(200).json(blog);
        }
        else {
            res.status(404).json({ error: 'Blog not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const create_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdBlog = yield Blogs_1.blogModel.create(req.body);
        res.status(201).json(createdBlog);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const update_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const updatedBlog = yield Blogs_1.blogModel.findByIdAndUpdate({ _id: id }, {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            content: req.body.content,
        }, { new: true } // Return the updated document
        );
        if (updatedBlog) {
            res.status(200).json(updatedBlog);
        }
        else {
            res.status(404).json({ error: 'Blog not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error has occurred' });
    }
});
const delete_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedBlog = yield Blogs_1.blogModel.findByIdAndDelete({ _id: id });
        if (deletedBlog) {
            res.status(200).json(deletedBlog);
        }
        else {
            res.status(404).json({ error: 'Blog not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
module.exports = {
    get_blog,
    get_blogs,
    create_blog,
    update_blog,
    delete_blog
};
