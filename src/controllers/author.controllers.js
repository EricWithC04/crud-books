import { 
    findAllAuthorsModel, 
    createAuthorModel, 
    updateAuthorModel, 
    deleteAuthorModel 
} from "../models/Author.model.js"

export const getAllAuthor = async (_req, res) => {
    try {
        const allAuthors = await findAllAuthorsModel();
    
        if (allAuthors.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Autores!'
            })
        }
    
        res.status(200).send(allAuthors)
    } catch (err) {
        console.error(err);
    }
}

// export const getOneAuthor = async (req, res) => {

// }

export const createAuthor = async (req, res) => {
    try {
        const { name, surname, biography } = req.body

        const newAuthor = await createAuthorModel({
            name,
            surname,
            biography
        })

        if (!newAuthor) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el Autor!'
            })
        }

        res.status(201).send({ message: 'Autor creado correctamente', newAuthor })
    } catch (err) {
        console.error(err);
    }
}

export const updateAuthor = async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, bibliography } = req.body

        const updatedAuthor = await updateAuthorModel(id, {
            name,
            surname,
            bibliography
        })

        if (!updatedAuthor) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el Autor!'
            })
        }

        res.status(200).send({message: 'Autor actualizado correctamente!', updatedAuthor})
    } catch (err) {
        console.error(err);
    }
}

export const deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params

        const deletedAuthor = await deleteAuthorModel(id)

        if (!deletedAuthor) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el Autor!'
            })
        }

        res.status(200).send({ message: 'Autor eliminado correctamente!', deletedAuthor })
    } catch (err) {
        console.error(err);
    }
}