import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

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

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
})