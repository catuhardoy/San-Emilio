const mongoose = require("mongoose")

const schema = mongoose.Schema({
    cowRoundUp: { // Nombre del rodeo
        type: mongoose.Schema.Types.ObjectId,
        ref: "cowRoundUp",       
    },
    quantity: { // Cantidad
        type: Number,
        default: 0
    }
    
});

module.exports = mongoose.model("Deaths", schema) 