const Caravan = require("../../models/caravan");

const getCaravan = async( )=>{
    const caravan = await Caravan.find();
    return caravan;
};

const createCaravan = async (name) => {
    const caravan = new Caravan({name});
    await caravan.save();
    return caravan;
}

module.exports = {
    getCaravan,
    createCaravan
}