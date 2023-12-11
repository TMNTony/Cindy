import {Schema, model, Model, Document} from "mongoose"

interface Picture extends  Document {
    pictureURL: string,
    caption: string
}

const pictureSchema = new Schema({
    pictureURL: String,
    caption: String
})

const pictureModel: Model<Picture> = model<Picture>('Picture', pictureSchema);
export {pictureModel, Picture}
