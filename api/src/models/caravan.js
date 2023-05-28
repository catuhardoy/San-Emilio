const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // Nombre de donde o a quien lo compro
        type: String
    },
   
})

module.exports = mongoose.model("Caravan", schema) 