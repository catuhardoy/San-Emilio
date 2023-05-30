const cowRoundUp = require("../../models/cowRoundUp");

const getCowRoundUp = async( )=>{
    const cows = await cowRoundUp.find();
    return cows;
};

const createCowRoundUp = async (name, quantity) => {
    const cow = new cowRoundUp({name, quantity});
    await cow.save();
    return cow;
}

module.exports = {
    getCowRoundUp,
    createCowRoundUp
}