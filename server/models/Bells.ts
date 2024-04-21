import {Schema, model, Document, Model} from "mongoose";

interface Bells extends Document {
    content: string
}

const bellsSchema: Schema = new Schema({
    content: String
})

const bellsModel: Model<Bells> = model<Bells>("bells", bellsSchema)

export {bellsModel, Bells}