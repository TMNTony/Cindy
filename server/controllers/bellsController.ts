import {bellsModel, Bells} from "../models/Bells";
import {Request, Response} from 'express';

const get_content = async (req: Request, res: Response): Promise<void> => {
    try {
        const content: Bells | null = await bellsModel.findOne();
        if (content !== null) {
            res.status(200).json(content);
        } else {
            res.status(404).json({error: "Content not found"});
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'})
    }
}

const update_content = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedContent = await bellsModel.findOneAndUpdate(
            {},
            { content: req.body.content },
            { new: true }
        );
        if (updatedContent) {
            res.status(200).json(updatedContent)
        } else {
            res.status(400).json({error: "Content not found"})
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'})
    }
}

export = {
    get_content,
    update_content
}