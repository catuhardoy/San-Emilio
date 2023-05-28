const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Nombre de la vacuna
        type: String
    },
    date:{
        type: Date
    },
    cow_round_up:{
        type: String
    },
    
   
})

module.exports = mongoose.model("Vaccine", schema) 