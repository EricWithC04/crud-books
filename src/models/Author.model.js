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

export const findAllAuthorsModel = async () => {
    const allAuthors = await AuthorModel.find().populate('Book')
    return allAuthors
}

export const createAuthorModel = async (data) => {
    const newAuthor = await AuthorModel.create(data)
    return newAuthor
}

export const updateAuthorModel = async (id, data) => {
    const updatedAuthor = await AuthorModel.updateByIdAndUpdate(id, data)
    return updatedAuthor
}

export const deleteAuthorModel = async (id) => {
    const deletedAuthor = await AuthorModel.findByIdAndRemove(id)
    return deletedAuthor
}

export default AuthorModel