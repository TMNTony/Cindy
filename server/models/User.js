"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    hash: String,
    salt: String
});
const userModel = (0, mongoose_1.model)("users", userSchema);
exports.userModel = userModel;
