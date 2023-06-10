const typeTransaction = require("../../models/typeTransaction");

const getTypes = async( )=>{
    const types = await typeTransaction.find();
    return types;
};

getTypeTransById = async (id) => {
    const typeTransaction = await typeTransaction.findById(id)
    if(!typeTransaction) throw Error ("No se encontro la transaccion")
    return typeTransaction	
}

const createType = async (name) => {
    const type = new typeTransaction({name});
    await type.save();
    return type;
}

module.exports = {
    getTypes,
    getTypeTransById,
    createType
}