"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pictureModel = void 0;
const mongoose_1 = require("mongoose");
const pictureSchema = new mongoose_1.Schema({
    pictureURL: String,
    caption: String
});
const pictureModel = (0, mongoose_1.model)('Picture', pictureSchema);
exports.pictureModel = pictureModel;
