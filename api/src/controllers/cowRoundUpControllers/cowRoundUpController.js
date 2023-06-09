const cowRoundUp = require("../../models/cowRoundUp");

const getCowRoundUp = async( )=>{
    const cows = await cowRoundUp.find();
    return cows;
};

const createCowRoundUp = async (name) => {
    const cow = new cowRoundUp({name});
    await cow.save();
    return cow;
};


const cowRoundUpById = async (_id) => {
    try {
      const roundUp = await cowRoundUp.findById(_id);
      if (!roundUp) {
        throw new Error(`No se encontró el rodeo con el Id = ${_id}`);
      }
  
      return roundUp;
    } catch (error) {
      throw new Error(`Error al obtener el rodeo: ${error.message}`);
    }
  };
  // y si ponemos : getCowRoundUpById?
  
  

module.exports = {
    getCowRoundUp,
    createCowRoundUp,
    cowRoundUpById
}