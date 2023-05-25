const {
    getAnimals,
    createAnimal
} = require("../../controllers/animalControllers/animalController")


const getAlls = async (req, res) => {
    try {
        const animals = await getAnimals();
        return res.status(200).json(animals)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const postAnimal = async (req, res ) => {
    const { weight, rodeo, raza, date_of_birth, caravana, origin, quantity } = req.body;
    try {
        const animal = await createAnimal(weight, rodeo, raza, date_of_birth, caravana, origin, quantity);
        return res.status(200).json(animal)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


module.exports = {
    getAlls,
    postAnimal
}