const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Nombre del rodeo
        type: String,        
    },
    quantity: { // Cantidad
        type: Number,
        default: 0
    }
    
})

module.exports = mongoose.model("cowRoundUp", schema) // CowRoundUp es RODEO