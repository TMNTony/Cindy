import {Schema, model, Document, Model} from "mongoose";

interface User extends Document {
    username: string,
    hash: string,
    salt: string
}

const userSchema: Schema = new Schema({
    username: String,
    hash: String,
    salt: String
})

const userModel: Model<User> = model<User>("users", userSchema)

export {userModel, User}