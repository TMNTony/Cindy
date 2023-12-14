"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
const videoRoutes_1 = __importDefault(require("./routes/videoRoutes"));
const bellsRoutes_1 = __importDefault(require("./routes/bellsRoutes"));
const imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use(blogRoutes_1.default);
app.use(profileRoutes_1.default);
app.use(videoRoutes_1.default);
app.use(bellsRoutes_1.default);
app.use(imageRoutes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/cindy')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err.message));
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
