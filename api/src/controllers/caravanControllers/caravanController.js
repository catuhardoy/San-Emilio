const Caravan = require("../../models/caravan");

const getCaravan = async( )=>{
    const caravan = await Caravan.find();
    return caravan;
};

const getCaravanById = async(_id)=>{
    const caravan = await Caravan.findById( _id );
    if(!caravan) throw error("Couldn't find a caravan for " + _id);
    return caravan;
};

const createCaravan = async (name, isOwn, color, date) => {
    const caravan = new Caravan({name, isOwn, color, date});
    await caravan.save();
    return caravan;
};





module.exports = {
    getCaravan,
    getCaravanById,
    createCaravan
}