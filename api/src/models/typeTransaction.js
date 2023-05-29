const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { // tipo de transaccion COMPRA o VEnTA
        type: String
    },
   
})

module.exports = mongoose.model("TypeTransaction", schema)