import {profileModel, Profile} from "../models/Profile";
import {Request, Response} from 'express';

const getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const profile = await profileModel.findOne();
        if (profile) {
            res.status(200).json(profile);
        } else {
            res.status(404).json({error: 'Profile not found'});
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

const createProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const createdProfile: Profile = await profileModel.create(req.body);
        res.status(201).json(createdProfile);
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

const updateProfile = async (req: Request, res: Response): Promise<void> => {

    try {
        const updatedProfile = await profileModel.findOneAndUpdate(
            {},
            {
                profilePicUrl: req.body.profilePicURL,
                bio: req.body.bio,
                about: req.body.about,
                philosophy: req.body.philosophy,
                achievements: req.body.achievements
            },
            {new: true} // Return the updated document
        );
        if (updatedProfile) {
            res.status(200).json(updatedProfile);
        } else {
            res.status(404).json({error: 'Profile not found'});
        }
    } catch (err: any) {
        res.status(500).json({error: err.message || 'An error occurred'});
    }
}

const deleteProfile = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    try {
        const deletedProfile= await profileModel.findByIdAndDelete({_id: id});
        if (deletedProfile) {
            res.status(200).json(deletedProfile)
        } else {
            res.status(400).json({error: 'Profile not found'})
        }

    } catch (err: any) {
        res.status(404).json({error: err.message} || 'An error occurred')
    }
}

export = {
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}