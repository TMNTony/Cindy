import {Schema, model, Model, Document} from "mongoose"
import * as process from "process";

interface Profile extends Document {
    profilePicURL: string,
    bio: string,
    about: string,
    philosophy: string
}

const profileSchema: Schema = new Schema({
    profilePicURL: String,
    bio: String,
    about: String,
    philosophy: String
})

const profileModel: Model<Profile>= model<Profile>("profile", profileSchema)

export {profileModel, Profile}