import { Router } from 'express'
import { createBook, deleteBook, getAllBooks, updateBook } from '../controllers/book.controllers.js'
const router = Router()

router.get('/', getAllBooks)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router