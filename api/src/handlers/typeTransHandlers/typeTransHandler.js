const {
    getTypes,
    createType
    
  } = require("../../controllers/typeTransControllers/typeTransController");
  
  const getAllTypes = async (req, res) => {
    try {
      const types = await getTypes();
      return res.status(200).json(types)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  const postType = async (req, res) => {
    const {name} = req.body;
    try {
      const type = await createType(name);
      res.status(200).json(type)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  };
  
  module.exports = {
    getAllTypes,
    postType
  }