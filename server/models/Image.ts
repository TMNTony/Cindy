import {Schema, model, Model, Document} from "mongoose";

interface Image extends Document {
    name: string,
    img: {
        imgData: Buffer,
        contentType: string
    }
}

const imageSchema: Schema = new Schema({
    name: String,
    img: {
        imgData: Buffer,
        contentType: String
    }
})

const imageModel: Model<Image> = model<Image>("uploads", imageSchema)

export {imageModel, Image}