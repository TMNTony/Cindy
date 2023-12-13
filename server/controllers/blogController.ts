import {blogModel, Blog} from "../models/Blogs"
import {Request, Response} from 'express';

const get_blogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const blogs: Blog[] | null = await blogModel.find({});
        if (blogs !== null) {
            res.status(200).json(blogs);
        } else {
            res.status(404).json({error: "Content not found"});
        }
    } catch (err: any) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
};
const get_blog = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id;
        const blog: Blog | null = await blogModel.findById({ _id: id });
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (err: any) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
};

const create_blog = async (req: Request, res: Response): Promise<void> => {
    try {
        const createdBlog: Blog | null = await blogModel.create(req.body);
        res.status(201).json(createdBlog);
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

const update_blog = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
    try {
        const updatedBlog: Blog | null = await blogModel.findByIdAndUpdate(
            {_id: id},
            {
                title: req.body.title,
                description: req.body.description,
                date: req.body.date,
                content: req.body.content,
            },
            {new: true} // Return the updated document
        );
        if (updatedBlog) {
            res.status(200).json(updatedBlog);
        } else {
            res.status(404).json({error: 'Blog not found'});
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error has occurred'});
    }
};

const delete_blog = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
    try {
        const deletedBlog: Blog | null = await blogModel.findByIdAndDelete(id);
        if (deletedBlog) {
            res.status(200).json(deletedBlog);
        } else {
            res.status(404).json({error: 'Blog not found'});
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

export = {
    get_blog,
    get_blogs,
    create_blog,
    update_blog,
    delete_blog
}