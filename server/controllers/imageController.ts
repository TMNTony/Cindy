import {Request, Response,} from 'express';
import {Image, imageModel} from '../models/Image'

const upload_image = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded');
        }

        const saveImage = await imageModel.create({
            caption: req.body.caption,
            img: {
                imgData: req.file.buffer, // Use req.file.buffer for the image data
                contentType: req.file.mimetype, // Use req.file.mimetype for the content type
            },
        });

        res.status(201).json(saveImage);
    } catch (err: any) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
};


const get_images = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUploads: Image[] | null = await imageModel.find({})
        res.status(200).json(allUploads)
    } catch (err: any) {
        res.status(500).json({error: err.message || "An error occurred"})
    }
}

const delete_image = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
    try {
        const deletedPicture = await imageModel.findByIdAndDelete(id)
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
        if (!req.file) {
            throw new Error('No file uploaded');
        }
        const updatedImage= await imageModel.findByIdAndUpdate(
            (id),
            {
                caption: req.body.caption,
                img: {
                    imgData: req.file.buffer, // Use req.file.buffer for the image data
                    contentType: req.file.mimetype, // Use req.file.mimetype for the content type
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
