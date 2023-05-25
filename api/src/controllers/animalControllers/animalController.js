const Animal = require("../../models/animal")

// Para obtener todos los animales
const getAnimals = async () => {
   const animals = await Animal.find()
   return animals
}


// Para crear un animal (Vaca, toro, vaquillona)
const createAnimal = async (weight, rodeo, raza, date_of_birth, caravana, origin, quantity) => {
    const animal = new Animal({
        weight,
        rodeo,
        raza,
        date_of_birth,
        caravana,
        origin,
        quantity
    })

    await animal.save()
    return animal
}

module.exports = {
    getAnimals,
    createAnimal
}