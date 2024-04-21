"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bellsModel = void 0;
const mongoose_1 = require("mongoose");
const bellsSchema = new mongoose_1.Schema({
    content: String
});
const bellsModel = (0, mongoose_1.model)("bells", bellsSchema);
exports.bellsModel = bellsModel;
