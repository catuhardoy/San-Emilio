const Animal = require("../../models/animal")
const cowRoundUp = require("../../models/cowRoundUp")
const Race = require("../../models/race")
const Caravan = require("../../models/caravan")

// Para obtener todos los animales
const getAnimals = async () => {
   const animals = await Animal.find()
                                .populate(["race", "cowRoundUp"])
                                .exec()
   return animals
}

const getById = async (_id) => {
    const animal = await Animal.findById(_id)
    if(!animal) throw error (`No se encontro al animal con el Id = ${_id}`)

    return animal
}


// Para crear un animal (Vaca, toro, vaquillona)
const createAnimal = async (weight, cowRoundUp, race, date_of_birth, caravan, quantity) => {

    if(!cowRoundUp || !race ) throw Error("No se envio la raza o en rodeo")

    const newCaravan = new Caravan({
        caravan
    });

    await newCaravan.save()



    const animal = new Animal({
        weight,
        cowRoundUp,
        race,
        date_of_birth,
        caravan:newCaravan,
        quantity
    })

    await animal.save()
    return animal
}

const updateAnimalId = async (_id, weight, cow_round_up, race, date_of_birth, caravan, quantity) => {
    const animal = await Animal.findById(_id)
    if(!animal) throw error (`No se encontro al animal con el Id = ${_id}`)

    animal.quantity = animal.quantity - quantity;

    const animales = await Animal.find({cow_round_up: cow_round_up, race: race })
    if(!animales) {
        const newAnimal = await createAnimal({
            weight, cow_round_up, race, date_of_birth, caravan, quantity
        })
        return  newAnimal
    }
    
    animales.quantity = animales.quantity + quantity
    return animales
}

const deleteAnimalId = async (_id, quantity) => {
    const animal = await Animal.findById(_id)
    if(!animal) throw new Error ("No existe el animal")
    if(animal.quantity < quantity) throw new Error("La cantidad es mayor a la que se tiene")
    animal.quantity = animal.quantity - quantity

    await animal.save()

    return animal
}

// const deleteAnimalId = async (_id, quantity) => {
//     const animal = await Animal.findById(_id)

//     await Animal.deleteOne({_id: _id})

//     return animal
// }

module.exports = {
    getAnimals,
    getById,
    createAnimal,
    updateAnimalId,
    deleteAnimalId
}