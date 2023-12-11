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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Blogs_1 = require("../models/Blogs");
var get_blogs = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var blogs, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Blogs_1.blogModel.find({})];
            case 1:
                blogs = _a.sent();
                res.status(200).json(blogs);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ error: err_1.message || 'An error occurred' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var get_blog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, blog, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Blogs_1.blogModel.findById({ _id: id })];
            case 1:
                blog = _a.sent();
                if (blog) {
                    res.status(200).json(blog);
                }
                else {
                    res.status(404).json({ error: 'Blog not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json({ error: err_2.message || 'An error occurred' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create_blog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var createdBlog, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Blogs_1.blogModel.create(req.body)];
            case 1:
                createdBlog = _a.sent();
                res.status(201).json(createdBlog);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).json({ error: err_3.message || 'An error occurred' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var update_blog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updatedBlog, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Blogs_1.blogModel.findByIdAndUpdate({ _id: id }, {
                        title: req.body.title,
                        description: req.body.description,
                        date: req.body.date,
                        content: req.body.content,
                    }, { new: true } // Return the updated document
                    )];
            case 2:
                updatedBlog = _a.sent();
                if (updatedBlog) {
                    res.status(200).json(updatedBlog);
                }
                else {
                    res.status(404).json({ error: 'Blog not found' });
                }
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.status(500).json({ error: err_4.message || 'An error has occurred' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var delete_blog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedBlog, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Blogs_1.blogModel.findByIdAndDelete({ _id: id })];
            case 2:
                deletedBlog = _a.sent();
                if (deletedBlog) {
                    res.status(200).json(deletedBlog);
                }
                else {
                    res.status(404).json({ error: 'Blog not found' });
                }
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res.status(500).json({ error: err_5.message || 'An error occurred' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports = {
    get_blog: get_blog,
    get_blogs: get_blogs,
    create_blog: create_blog,
    update_blog: update_blog,
    delete_blog: delete_blog
};
