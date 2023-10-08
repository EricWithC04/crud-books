import { Router } from 'express'
import { createBook, deleteBook, getAllBooks, updateBook } from '../controllers/book.controllers.js'
const router = Router()

router.get('/', getAllBooks)
router.post('/', createBook)
router.put('/', updateBook)
router.delete('/', deleteBook)

export default router