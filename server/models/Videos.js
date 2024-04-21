"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoModel = void 0;
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    videoURL: String,
    caption: String,
});
const videoModel = (0, mongoose_1.model)("videos", videoSchema);
exports.videoModel = videoModel;
