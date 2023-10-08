import { Router } from 'express'
import { getAllAuthor, createAuthor, updateAuthor, deleteAuthor } from '../controllers/author.controllers.js'
const router = Router()

router.get("/", getAllAuthor)
router.post("/", createAuthor)
router.put("/", updateAuthor)
router.delete("/", deleteAuthor)

export default router