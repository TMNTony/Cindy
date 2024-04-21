"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User_1 = require("../models/User");
const utils_1 = require("../utils");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.userModel.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json({ success: false, msg: "could not find user" });
        }
        const isValid = (0, utils_1.validPassword)(req.body.password, user.hash, user.salt);
        if (isValid) {
            const tokenObject = (0, utils_1.issueJWT)(user);
            res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
        }
        else {
            res.status(401).json({ success: false, msg: "you entered the wrong password" });
        }
    }
    catch (err) {
        next(err);
    }
});
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saltHash = (0, utils_1.genPassword)(req.body.password);
        const salt = saltHash.salt;
        const hash = saltHash.hash;
        const newUser = yield User_1.userModel.create({
            username: req.body.username,
            hash: hash,
            salt: salt,
        });
        const user = yield newUser.save();
        res.json({ success: true, user: user });
    }
    catch (err) {
        next(err);
    }
});
module.exports = {
    login,
    register
};
