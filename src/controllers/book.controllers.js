import { 
    findAllBooksModel, 
    createBookModel, 
    updateBookModel, 
    deleteBookModel 
} from "../models/Book.model.js"

export const getAllBooks = async (req, res) => {
    try {
        const allBooks = await findAllBooksModel()

        if (allBooks.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Libros!'
            })
        }

        res.status(200).send(allBooks)
    } catch (err) {
        console.error(err);
    }
}

// export const getOneBook = async (req, res) => {
//     try {

//     } catch (err) {
//         console.error(err);
//     }
// }

export const createBook = async (req, res) => {
    try {
        const { title, genre, authorId } = req.body
        const newBook = await createBookModel({
            title,
            genre,
            authorId
        })

        if (!newBook) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el Libro!'
            })
        }

        res.status(201).send({ message: 'libro creado correctamente!', newBook })
    } catch (err) {
        console.error(err);
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const { title, genre, authorId } = req.body

        const updatedBook = await updateBookModel(id, {
            title, 
            genre,
            authorId
        })

        if (!updatedBook) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido acutalizar el Libro!'
            })
        }

        res.status(200).send({ message: 'se ha actualizado el libro correctamente!', updatedBook })
    } catch (err) {
        console.error(err);
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        
        const deletedBook = await deleteBookModel(id)

        if (!deletedBook) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el Libro!'
            })
        }

        res.status(200).send({ message: 'libro eliminado correctamente', deletedBook })
    } catch (err) {
        console.error(err);
    }
}