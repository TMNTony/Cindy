"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageModel = void 0;
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    name: String,
    img: {
        imgData: Buffer,
        contentType: String
    }
});
const imageModel = (0, mongoose_1.model)("uploads", imageSchema);
exports.imageModel = imageModel;
