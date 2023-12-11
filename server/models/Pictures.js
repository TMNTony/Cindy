"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pictureModel = void 0;
var mongoose_1 = require("mongoose");
var pictureSchema = new mongoose_1.Schema({
    pictureURL: String,
    caption: String
});
var pictureModel = (0, mongoose_1.model)('Picture', pictureSchema);
exports.pictureModel = pictureModel;
