const express =require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const blogRouter = require("./routes/blogRoutes")

const app = express()
app.use(cors)
app.use(express.json)
app.use(blogRouter)

mongoose.connect('mongodb://localhost:27017/cindy')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err.message));

app.listen(3001, () => {
    console.log("server is running")
})