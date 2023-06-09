const {
    getCaravan,
    getCaravanById,
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

  const getCaravanId = async (req, res) => {
    const {id} = req.params;
    try {
      const caravan = await getCaravanById(id);
      return res.status(200).json(caravan)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  const postCaravan = async (req, res) => {
    const {name, isOwn, color, date} = req.body;
    try {
      const caravan = await createCaravan(name, isOwn, color, date);
      res.status(200).json(caravan)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  module.exports = {
    getAllCaravans,
    getCaravanId,
    postCaravan
  }