const mongoose = require("mongoose")

const schema = mongoose.Schema({
    weight: { // Peso del animal
        type: Number,        
    },
    cow_round_up: { // Vaca, Toro, Vaquillona, Novillo, Ternero, Ternera
        type: String
    },
    race: { // Colorado, Negro, Blanco_Negro
        type: String
    },
    date_of_birth: { // Año de nacimiento si es propio, null si es comprado
        type: Date,
        default: null
    },
    caravan: { // Si es propio (false), si es comprado (true)
        type: Boolean,
        default: false
    },
    origin: { // Null si es propio, nombre de identificacion de compra
        type: String,
        default: null
    },
    quantity: {
        type: Number
    }
})

module.exports = mongoose.model("Animal", schema)