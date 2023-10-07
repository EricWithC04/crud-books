import "dotenv/config"

const environments = {
    PORT: process.env.PORT || 4000,
    DB: {
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        NAME: process.env.DB_NAME,
    }
}

export default environments