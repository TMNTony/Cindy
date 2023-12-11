import {videoModel, Video} from "../models/Videos"
import {Request, Response} from "express";

const get_videos = async (req: Request, res: Response): Promise<void> => {
    try {
        const videos: Video[] = await videoModel.find({});
        res.status(200).json(videos)
    } catch (err) {
        res.status(500).json({error: err.message || 'An error has occurred'})
    }
}

const create_video = async (req: Request, res: Response): Promise<void> => {
    try {
        const createdVideo: Video = await videoModel.create(req.body);
        res.status(201).json(createdVideo)
    } catch (err) {
        res.status(500).json({error: err.message || 'An error has occurred'})
    }
}

const update_video = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id
        const updatedVideo: Video = await videoModel.findByIdAndUpdate(
            {_id: id},
            {
                videoURL: req.body.videoURL,
                caption: req.body.caption
            },
            {new: true}
        );
        if (updatedVideo) {
            res.status(200).json(updatedVideo)
        } else {
            res.status(400).json({error: "Video not found"})
        }
    } catch (err) {
        res.status(500).json({error: err.message || 'An error has occurred'})
    }
}

const delete_video = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;
    try {
        const deletedVideo: Video = videoModel.findByIdAndDelete({_id: id})
        if (deletedVideo) {
            res.status(200).json(deletedVideo)
        } else {
            res.status(400).json({error: "Video not found"})
        }

    } catch (err) {
        res.status(500).json({error: err.message || 'An error has occurred'})
    }
}

export = {
    get_videos,
    create_video,
    update_video,
    delete_video
}