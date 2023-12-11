"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
var mongoose_1 = require("mongoose");
var blogSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    date: String,
    content: String
});
var blogModel = (0, mongoose_1.model)("blog", blogSchema);
exports.blogModel = blogModel;
