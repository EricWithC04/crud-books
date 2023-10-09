import { Router } from 'express'
import { getAllAuthor, createAuthor, updateAuthor, deleteAuthor } from '../controllers/author.controllers.js'
const router = Router()

router.get("/", getAllAuthor)
router.post("/", createAuthor)
router.put("/:id", updateAuthor)
router.delete("/:id", deleteAuthor)

export default router