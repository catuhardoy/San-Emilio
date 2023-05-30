const Race = require("../../models/race");

const getRaces = async( )=>{
    const races = await Race.find();
    return races;
};

const createRace = async (name) => {
    const race = new Race({name});
    await race.save();
    return race;
}

module.exports = {
    getRaces,
    createRace
}