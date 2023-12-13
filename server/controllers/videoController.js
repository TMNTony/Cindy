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
const Videos_1 = require("../models/Videos");
const get_videos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield Videos_1.videoModel.find({});
        res.status(200).json(videos);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error has occurred' });
    }
});
const create_video = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdVideo = yield Videos_1.videoModel.create(req.body);
        res.status(201).json(createdVideo);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error has occurred' });
    }
});
const update_video = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedVideo = yield Videos_1.videoModel.findByIdAndUpdate({ _id: id }, {
            videoURL: req.body.videoURL,
            caption: req.body.caption,
            id: req.body.id
        }, { new: true });
        if (updatedVideo) {
            res.status(200).json(updatedVideo);
        }
        else {
            res.status(400).json({ error: "Video not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error has occurred' });
    }
});
const delete_video = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedVideo = yield Videos_1.videoModel.findByIdAndDelete(id);
        if (deletedVideo) {
            res.status(200).json(deletedVideo);
        }
        else {
            res.status(400).json({ error: "Video not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message || 'An error has occurred' });
    }
});
module.exports = {
    get_videos,
    create_video,
    update_video,
    delete_video
};
