"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadModel = void 0;
const mongoose_1 = require("mongoose");
const uploadSchema = new mongoose_1.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String
    }
});
const uploadModel = (0, mongoose_1.model)("uploads", uploadSchema);
exports.uploadModel = uploadModel;
