const typeTransaction = require("../../models/typeTransaction");

const getTypes = async( )=>{
    const types = await typeTransaction.find();
    return types;
};

const createType = async (name) => {
    const type = new typeTransaction({name});
    await type.save();
    return type;
}

module.exports = {
    getTypes,
    createType
}