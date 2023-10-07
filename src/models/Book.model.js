import { model, Types, Schema } from "mongoose";

const bookSchema = new Schema({
    id: String
}, {
    versionKey: false
})

const BookModel = model("Book", bookSchema)

export default BookModel;