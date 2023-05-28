const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Nombre del rodeo
        type: String,        
    },
    quantity: { // Cantidad
        type: Number
    }
    
})

module.exports = mongoose.model("cowRoundUp", schema) // CowRoundUp es RODEO