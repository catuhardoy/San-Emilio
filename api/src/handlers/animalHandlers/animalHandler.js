const {
    getAnimals,
    getById,
    createAnimal,
    updateAnimalId,
    deleteAnimalId
} = require("../../controllers/animalControllers/animalController")


const getAlls = async (req, res) => {
    try {
        const animals = await getAnimals();
        return res.status(200).json(animals)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: error.message})
    }
}

const getId = async (req, res) => {
    const { id } = req.params
    try {
        const animal = await getById(id);
        return res.status(200).json(animal)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


const postAnimal = async (req, res ) => {
    const { weight, cow_round_up, race, date_of_birth, caravan, quantity } = req.body;
    try {
        const animal = await createAnimal( weight, cow_round_up, race, date_of_birth, caravan, quantity);
        return res.status(200).json(animal)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const updateAnimal = async (req, res ) => {
    const { _id, weight, cow_round_up, race, date_of_birth, caravan, quantity } = req.body;
    try {
        const animal = await updateAnimalId(_id, weight, cow_round_up, race, date_of_birth, caravan, quantity);
        return res.status(200).json(animal)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const deleteAnimal = async (req, res ) => {
    const { _id, quantity } = req.body
    try {
        const animal = await deleteAnimalId(_id, quantity)
        return res.status(200).json(animal)
    } catch ( error ) {
        return res.status(400).json({error: error.message})
    }
}


module.exports = {
    getAlls,
    getId,
    postAnimal,
    updateAnimal,
    deleteAnimal
}