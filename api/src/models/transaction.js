const mongoose = require("mongoose")

const schema = mongoose.Schema({
    typeTransaction: { //TIPO DE TRANSACCION COMPRA O VENTA 
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypeTransaction"
    },
    auction: { // Remate //En caso de COMPRA
        type: String,        
    },
    origin: { // procedencia (nombre del vendedor) En caso de COMPRA
        type: String,
        default: null
    },
    price: { //precio de la compra o la venta
        type: Number,
    },
    quantity: { //cantidades //COMPRA Y VENTA
        type: Number,
    },
    weight: { //PESO en ambos casos puede entrar
        type: Number,
    },
    cowRoundUp: { //COMPRA O VENTA a que rodeo pertenece (tipos de rodeo)
        type: mongoose.Schema.Types.ObjectId,
        ref: "cowRoundUp",
    }
});

    module.exports = mongoose.model("Transaction", schema)