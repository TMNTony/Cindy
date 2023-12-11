"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoModel = void 0;
var mongoose_1 = require("mongoose");
var videoSchema = new mongoose_1.Schema({
    videoURL: String,
    caption: String
});
var videoModel = (0, mongoose_1.model)("videos", videoSchema);
exports.videoModel = videoModel;
