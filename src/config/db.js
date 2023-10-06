import { connect } from "mongoose";
import environments from "../environments/environments.js";
const {
    PORT,
    HOST,
    NAME
} = environments.DB

const connectMongoDB = async () => {
    try {
        await connect(`mongodb://${HOST}:${PORT}/${NAME}`)
        console.log('Conexion establecida correctamente!');
    } catch (err) {
        console.error(err);
    }
}

export default connectMongoDB