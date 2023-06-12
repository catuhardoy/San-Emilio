const Deaths = require("../../models/deaths");
const cowRoundUp = require("../../models/cowRoundUp");

const getDeaths = async()=> {
    const deaths = await Deaths.find()
    .populate("cowRoundUp")
    .exec()

    return deaths;
};

const createDeaths = async(cowRoundUp, quantity)=> {
     if(!cowRoundUp) throw Error("No cowRoundUp selected");

     const death = new Deaths({cowRoundUp, quantity})
     await death.save();
     return death;
};

module.exports = {
    getDeaths,
    createDeaths,
}
