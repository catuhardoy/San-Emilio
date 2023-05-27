const mongoose = require("mongoose")

const schema = mongoose.Schema({
    type: { //TIPO DE TRANSACCION COMPRA O VENTA 
        type: String,
    },
    auction: { // Remate //En caso de COMPRA
        type: String,        
    },
    origin: { // procedencia (nombre del vendedor) En caso de COMPRA
        type: String,
        default: null
    },
    prize: { //precio de la compra o la venta
        type: Number,
    },
    quantity: { //cantidades //COMPRA Y VENTA
        type: Number,
    },
    weight: { //PESO en ambos casos puede entrar
        type: Number,
    },
    rodeo: { //COMPRA O VENTA a que rodeo pertenece (tipos de rodeo)
        type: Number,
    }
});

    module.exports = mongoose.model("Transaction", schema)