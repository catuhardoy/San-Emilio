const {
   getCowRoundUp,
   createCowRoundUp
  } = require("../../controllers/cowRoundUpControllers/cowRoundUpController");
  
  const getCowRound = async (req, res) => {
    try {
      const cowsUp = await getCowRoundUp();
      return res.status(200).json(cowsUp)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  const postCowRound = async (req, res) => {
    const {name} = req.body;
    try {
      const cowRound = await createCowRoundUp(name);
      res.status(200).json(cowRound)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  module.exports = {
      getCowRound,
      postCowRound
    
  }