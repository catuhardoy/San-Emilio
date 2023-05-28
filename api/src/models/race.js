const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Averidinangus Colorada, Negra o Blanco y Negro
        type: String
    },
   
})

module.exports = mongoose.model("Race", schema) // race es Raza