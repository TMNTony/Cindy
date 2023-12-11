"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileModel = void 0;
var mongoose_1 = require("mongoose");
var profileSchema = new mongoose_1.Schema({
    profilePicURL: String,
    bio: String,
    about: String,
    philosophy: String
});
var profileModel = (0, mongoose_1.model)("profile", profileSchema);
exports.profileModel = profileModel;
