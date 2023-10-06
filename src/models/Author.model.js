import { model, Types, Schema } from 'mongoose'

const authorSchema = new Schema({
    id: String
}, {
    versionKey: false
})

const AuthorModel = model('Author', authorSchema)

export default AuthorModel