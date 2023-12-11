const express =require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const blogRouter = require("./routes/blogRoutes")
const pictureRouter = require("./routes/pictureRoutes")
const profileRouter = require("./routes/profileRoutes")
const videoRouter = require("./routes/videoRoutes")

const app = express()
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