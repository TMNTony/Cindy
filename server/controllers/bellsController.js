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
const Bells_1 = require("../models/Bells");
const get_content = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const content = yield Bells_1.bellsModel.findOne();
        if (content !== null) {
            res.status(200).json(content);
        }
        else {
            res.status(404).json({ error: "Content not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
const update_content = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedContent = yield Bells_1.bellsModel.findOneAndUpdate({}, { content: req.body.content }, { new: true });
        if (updatedContent) {
            res.status(200).json(updatedContent);
        }
        else {
            res.status(400).json({ error: "Content not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message || 'An error occurred' });
    }
});
module.exports = {
    get_content,
    update_content
};
