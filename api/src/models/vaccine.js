const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Nombre de la vacuna
        type: String
    },
    month:{
        type: Date  // hace date o string?
    },
    frequency: {
        type: String
    },
    cow_round_up:{
        type: String
    },
    
   
})

module.exports = mongoose.model("Vaccine", schema) 