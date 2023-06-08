const cowRoundUp = require("../../models/cowRoundUp");

const getCowRoundUp = async( )=>{
    const cows = await cowRoundUp.find();
    return cows;
};

const createCowRoundUp = async (name) => {
    const cow = new cowRoundUp({name});
    await cow.save();
    return cow;
}

module.exports = {
    getCowRoundUp,
    createCowRoundUp
}