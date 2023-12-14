import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";
import blogRouter from './routes/blogRoutes';
import profileRouter from './routes/profileRoutes';
import videoRouter from './routes/videoRoutes';
import bellsRouter from './routes/bellsRoutes';
import imageRouter from "./routes/imageRoutes"

const app: Express = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());

// Routes
app.use(blogRouter);
app.use(profileRouter);
app.use(videoRouter);
app.use(bellsRouter);
app.use(imageRouter)

mongoose.connect('mongodb://localhost:27017/cindy')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err.message));


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
