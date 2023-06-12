const Deaths = require("../../models/deaths");
const cowRoundUp = require("../../models/cowRoundUp");

const getDeaths = async()=> {
    const deaths = await Deaths.find()
    .populate("cowRoundUp")
    .exec()

    return deaths;
};

module.exports = {
    getDeaths,
}
