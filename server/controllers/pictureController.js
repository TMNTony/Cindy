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
const Pictures_1 = require("../models/Pictures");
const get_pictures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pictures = yield Pictures_1.pictureModel.find({});
        res.status(200).json(pictures);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const get_picture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const picture = yield Pictures_1.pictureModel.findById({});
        if (picture) {
            res.status(200).json(picture);
        }
        else {
            res.status(404).json({ error: 'Picture not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const create_picture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdPicture = yield Pictures_1.pictureModel.create(req.body);
        res.status(201).json(createdPicture);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const update_picture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const updatedPicture = yield Pictures_1.pictureModel.findByIdAndUpdate({ _id: id }, {
            pictureUrl: req.body.pictureURL,
            caption: req.body.caption,
        }, { new: true } // Return the updated document
        );
        if (updatedPicture) {
            res.status(200).json(updatedPicture);
        }
        else {
            res.status(404).json({ error: 'Picture not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const delete_picture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedPicture = yield Pictures_1.pictureModel.findByIdAndDelete({ _id: id });
        if (deletedPicture) {
            res.status(200).json(deletedPicture);
        }
        else {
            res.status(404).json({ error: 'Picture not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
module.exports = {
    get_pictures,
    get_picture,
    update_picture,
    create_picture,
    delete_picture
};
