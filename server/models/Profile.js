"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileModel = void 0;
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    profilePicURL: String,
    bio: String,
    about: String,
    philosophy: String
});
const profileModel = (0, mongoose_1.model)("profile", profileSchema);
exports.profileModel = profileModel;
