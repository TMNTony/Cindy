import express, {Express} from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import blogRouter from './routes/blogRoutes'
import pictureRouter from './routes/pictureRoutes'
import profileRouter from './routes/profileRoutes'
import videoRouter from './routes/videoRoutes'


const app: Express = express();
app.use(cors())
app.use(express.json())
app.use(blogRouter)
app.use(pictureRouter)
app.use(profileRouter)
app.use(videoRouter)

mongoose.connect('mongodb://localhost:27017/cindy')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err.message));

app.listen(3001, () => {
    console.log("server is running")
})