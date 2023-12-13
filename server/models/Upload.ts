import {Schema, model, Model, Document} from "mongoose";

interface Upload extends Document {
    name: string,
    img: {
        data: Buffer,
        contentType: string
    }
}

const uploadSchema: Schema = new Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String
    }
})

const uploadModel: Model<Upload> = model<Upload>("uploads", uploadSchema)

export {uploadModel, Upload}