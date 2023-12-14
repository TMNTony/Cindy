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
const Image_1 = require("../models/Image");
const upload_image = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            throw new Error('No file uploaded');
        }
        const saveImage = yield Image_1.imageModel.create({
            caption: req.body.caption,
            img: {
                imgData: req.file.buffer, // Use req.file.buffer for the image data
                contentType: req.file.mimetype, // Use req.file.mimetype for the content type
            },
        });
        res.status(201).json(saveImage);
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const get_images = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUploads = yield Image_1.imageModel.find({});
        res.status(200).json(allUploads);
    }
    catch (err) {
        res.status(500).json({ error: err.message || "An error occurred" });
    }
});
const delete_image = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedPicture = yield Image_1.imageModel.findByIdAndDelete(id);
        if (deletedPicture) {
            res.status(200).json(deletedPicture);
        }
        else {
            res.status(404).json({ error: 'Picture not found' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const update_image = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const updatedImage = yield Image_1.imageModel.findByIdAndUpdate({ _id: id }, {
            caption: req.body.caption,
            img: {
                imgData: req.body.imgData,
                contentType: "image/png",
            }
        }, { new: true } // Return the updated document
        );
        if (updatedImage) {
            res.status(200).json(updatedImage);
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
    get_images,
    upload_image,
    delete_image,
    update_image
};
