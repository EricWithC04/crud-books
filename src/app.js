import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectMongoDB from "./config/db.js";
import bookRouter from "./routes/book.routes.js";
import authorRouter from "./routes/author.routes.js";

import environments from "./environments/environments.js";
const {
    PORT
} = environments

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use((express.json()))
app.use((express.urlencoded({ extended: true })))

app.use('/book', bookRouter)
app.use('/author', authorRouter)

app.listen(PORT, () => {
    connectMongoDB()
    console.log(`Server listen on http://localhost:${PORT}`);
})