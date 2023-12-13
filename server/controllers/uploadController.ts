import {Request, Response,} from 'express';
import fs from 'fs/promises'
import {Upload, uploadModel} from '../models/Upload'
import {pictureModel} from "../models/Pictures";

const upload_image = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded');
        }

        const {filename} = req.file;
        const imageData: Buffer = await fs.readFile("uploads/" + filename);

        const saveImage = await uploadModel.create({
            name: req.body.name,
            img: {
                data: imageData,
                contentType: "image/png",
            },
        });

        // Delete the uploaded file after successfully saving to the database
        // await fs.unlink("uploads/" + filename);

        res.status(201).json(saveImage);
    } catch (err: any) {
        res.status(500).json({error: err.message || "An error occurred"});
    }
};

const get_images = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUploads: Upload[] | null = await uploadModel.find({})
        res.status(200).json(allUploads)
    } catch (err: any) {
        res.status(500).json({error: err.message || "An error occurred"})
    }
}

const delete_image = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
    try {
        console.log('Deleting picture with ID:', id);
        const deletedPicture = await pictureModel.findByIdAndDelete(id)
        if (deletedPicture) {
            res.status(200).json(deletedPicture);
        } else {
            res.status(404).json({error: 'Picture not found'});
        }
    } catch (err: any) {
        console.log(err)
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

const update_image = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id
    try {
        const updatedImage= await pictureModel.findByIdAndUpdate(
            {_id: id},
            {
                name: req.body.name,
                img: {
                    data: req.body.data,
                    contentType: "image/png",
                }
            },
            {new: true} // Return the updated document
        );
        if (updatedImage) {
            res.status(200).json(updatedImage);
        } else {
            res.status(404).json({error: 'Picture not found'});
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

export = {
    get_images,
    upload_image,
    delete_image,
    update_image
}
