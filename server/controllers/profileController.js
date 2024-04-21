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
const Profile_1 = require("../models/Profile");
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield Profile_1.profileModel.findOne();
        if (profile) {
            res.status(200).json(profile);
        }
        else {
            res.status(404).json({ error: 'Profile not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdProfile = yield Profile_1.profileModel.create(req.body);
        res.status(201).json(createdProfile);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProfile = yield Profile_1.profileModel.findOneAndUpdate({}, {
            profilePicUrl: req.body.profilePicURL,
            bio: req.body.bio,
            about: req.body.about,
            philosophy: req.body.philosophy,
            achievements: req.body.achievements
        }, { new: true } // Return the updated document
        );
        if (updatedProfile) {
            res.status(200).json(updatedProfile);
        }
        else {
            res.status(404).json({ error: 'Profile not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedProfile = yield Profile_1.profileModel.findByIdAndDelete({ _id: id });
        if (deletedProfile) {
            res.status(200).json(deletedProfile);
        }
        else {
            res.status(400).json({ error: 'Profile not found' });
        }
    }
    catch (err) {
        res.status(404).json({ error: err.message } || 'An error occurred');
    }
});
module.exports = {
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
};
