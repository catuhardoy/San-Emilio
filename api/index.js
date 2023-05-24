require("dotenv").config()
const mongoose = require("mongoose")
const app = require("./src/server")
const { DATABASE_URL, SERVER_PORT } = process.env

const PORT = SERVER_PORT || 3000

mongoose
    .connect(DATABASE_URL)
    .then( () => {
        console.log("Conectado a base de datos")
        app.listen(PORT, () =>{
            console.log("Server listening on port ", PORT)
        })
    })
    .catch( e => console.log(e))


