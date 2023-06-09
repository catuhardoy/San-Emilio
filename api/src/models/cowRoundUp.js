const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Nombre del rodeo
        type: String,        
    },
    
    
})

module.exports = mongoose.model("cowRoundUp", schema) // CowRoundUp es RODEO