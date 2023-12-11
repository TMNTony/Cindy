"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var blogRoutes_1 = require("./routes/blogRoutes");
var pictureRoutes_1 = require("./routes/pictureRoutes");
var profileRoutes_1 = require("./routes/profileRoutes");
var videoRoutes_1 = require("./routes/videoRoutes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(blogRoutes_1.default);
app.use(pictureRoutes_1.default);
app.use(profileRoutes_1.default);
app.use(videoRoutes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/cindy')
    .then(function () { return console.log('Connected to MongoDB'); })
    .catch(function (err) { return console.error('Error connecting to MongoDB:', err.message); });
app.listen(3001, function () {
    console.log("server is running");
});
