"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bellsController_1 = __importDefault(require("../controllers/bellsController"));
router.get("/bells", bellsController_1.default.get_content);
router.put("/bells/updateContent", bellsController_1.default.update_content);
module.exports = router;
