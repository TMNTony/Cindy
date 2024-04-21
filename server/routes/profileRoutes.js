"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const profileController_1 = __importDefault(require("../controllers/profileController"));
router.get("/profile", profileController_1.default.getProfile);
router.put("/profile/updateProfile", profileController_1.default.updateProfile);
module.exports = router;
