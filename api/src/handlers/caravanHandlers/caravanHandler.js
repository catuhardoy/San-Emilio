const {
    getCaravan,
    createCaravan
  } = require("../../controllers/caravanControllers/caravanController");
  
  const getAllCaravans = async (req, res) => {
    try {
      const caravan = await getCaravan();
      return res.status(200).json(caravan)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  const postCaravan = async (req, res) => {
    const {name} = req.body;
    try {
      const caravan = await createCaravan(name);
      res.status(200).json(caravan)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  module.exports = {
    getAllCaravans,
    postCaravan
  }