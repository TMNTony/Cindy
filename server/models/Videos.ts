import {Schema, model, Document, Model} from "mongoose"

interface Video extends Document {
    videoURL: string,
    caption: string
}

const videoSchema: Schema = new Schema({
    videoURL: String,
    caption: String
})

const videoModel: Model<Video> = model<Video>("videos", videoSchema)

export {videoModel, Video}