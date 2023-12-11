"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    date: String,
    content: String
});
const blogModel = (0, mongoose_1.model)("blog", blogSchema);
exports.blogModel = blogModel;
