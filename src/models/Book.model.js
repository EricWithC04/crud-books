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

export default BookModel;