const {getDeaths} = require("../../controllers/deathControllers/deathController")

const getAllDeaths = async (req, res) => {
    try {
        const death = await getDeaths();
        return res.status(200).json(death)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: error.message})
    }
};

module.exports ={
    getAllDeaths,
}