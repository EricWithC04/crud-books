import { model, Types, Schema } from 'mongoose'

const authorSchema = new Schema({
    name: String,
    surname: String,
    bibliography: String,
    books: [{
        type: Types.ObjectId,
        ref: 'Book'
    }]
}, {
    versionKey: false
})

const AuthorModel = model('Author', authorSchema)

export default AuthorModel