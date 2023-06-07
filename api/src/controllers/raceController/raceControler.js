const Race = require("../../models/race");

const getRaces = async( )=>{
    const races = await Race.find();
    return races;
};

const getRaceById = async(_id)=> {
    const race = await Race.findById( _id );
    if(!race) throw error("Couldn't find a race for " + _id);
    return race;

}

const createRace = async (name) => {
    const race = new Race({name});
    await race.save();
    return race;
}

module.exports = {
    getRaces,
    createRace,
    getRaceById
}