const mongoose = require("mongoose")

const schema = mongoose.Schema({
    weight: {
        type: Number,        
    },
    rodeo: { // Vaca, Toro, Vaquillona, Novillo, Ternero, Ternera
        type: String
    },
    raza: { // Colorado, Negro, Blanco_Negro
        type: String
    },
    date_of_birth: {
        type: Date,
        default: null
    },
    caravana: {
        type: String
    }
})

module.exports = mongoose.model("Animal", schema)