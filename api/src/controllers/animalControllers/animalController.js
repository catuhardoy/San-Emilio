const Animal = require("../../models/animal")


const getAnimals = async () => {
   const animals = await Animal.find()
   return animals
}

const createAnimal = async (weight, rodeo, raza, date_of_birth, caravana) => {
    const animal = new Animal({
        weight,
        rodeo,
        raza,
        date_of_birth,
        caravana,
    })

    await animal.save()
    return animal
}

module.exports = {
    getAnimals,
    createAnimal
}