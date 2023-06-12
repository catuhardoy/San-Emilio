const {getDeaths, 
createDeaths,
} = require("../../controllers/deathControllers/deathController")

const getAllDeaths = async (req, res) => {
    try {
        const death = await getDeaths();
        return res.status(200).json(death)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: error.message})
    }
};

const postDeaths = async (req,res) => {
    const {cowRoundUp, quantity} = req.body;
    try {
        const death = await createDeaths(cowRoundUp, quantity);
        return res.status(200).json(death)
    } catch (error) {
        
        return res.status(400).json({error: error.message})
    }
};


module.exports ={
    getAllDeaths,
    postDeaths,
}