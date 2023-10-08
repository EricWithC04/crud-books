import { model, Types, Schema } from "mongoose";

const bookSchema = new Schema({
    id: String,
    title: String,
    genre: String,
    author: {
        type: Types.ObjectId,
        ref: 'Author'
    }
}, {
    timestamps: true,
    versionKey: false
})

const BookModel = model("Book", bookSchema)

export const findAllBooksModel = async () => {
    const allBooks = await BookModel.find().populate('Author')
    return allBooks
}

export const createBookModel = async (data) => {
    const newBook = await BookModel.create(data)
    return newBook
}

export const updateBookModel = async (id, data) => {
    const updatedBook = await BookModel.findByIdAndUpdate(id, data)
    return updatedBook
}

export const deleteBookModel = async (id) => {
    const deletedBook = await BookModel.findByIdAndRemove(id)
    return deletedBook
}

export default BookModel;