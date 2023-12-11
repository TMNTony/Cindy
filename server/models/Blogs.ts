import {Schema, model, Document, Model} from "mongoose";

interface Blog extends Document {
    title: string,
    description: string,
    date: string,
    content: string
}

const blogSchema: Schema = new Schema({
    title: String,
    description: String,
    date: String,
    content: String
})

const blogModel: Model<Blog> = model<Blog>("blog", blogSchema)

export {blogModel, Blog}

