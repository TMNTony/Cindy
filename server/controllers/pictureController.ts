import {pictureModel, Picture} from "../models/Pictures"
import {Request, Response} from 'express';

const get_pictures = async (req: Request, res: Response): Promise<void> => {
    try {
        const pictures: Picture[] = await pictureModel.find({});
        res.status(200).json(pictures);
    } catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
};

const get_picture = async (req: Request, res: Response): Promise<void> => {
    try {
        const picture: Picture = await pictureModel.findById({})
        if (picture) {
            res.status(200).json(picture);
        } else {
            res.status(404).json({error: 'Picture not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
};
const create_picture = async (req: Request, res: Response): Promise<void> => {
    try {
        const createdPicture: Picture = await pictureModel.create(req.body);
        res.status(201).json(createdPicture);
    } catch (err) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}
const update_picture = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id
    try {
        const updatedPicture: Picture = await pictureModel.findByIdAndUpdate(
            {_id: id},
            {
                pictureUrl: req.body.pictureURL,
                caption: req.body.caption,
            },
            {new: true} // Return the updated document
        );
        if (updatedPicture) {
            res.status(200).json(updatedPicture);
        } else {
            res.status(404).json({error: 'Picture not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}
const delete_picture = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
    try {
        const deletedPicture: Picture = await pictureModel.findByIdAndDelete({_id: id});
        if (deletedPicture) {
            res.status(200).json(deletedPicture);
        } else {
            res.status(404).json({error: 'Picture not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

export = {
    get_pictures,
    get_picture,
    update_picture,
    create_picture,
    delete_picture
}