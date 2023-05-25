const { Router } = require("express")
const {
    getAlls,
    postAnimal
} = require("../handlers/animalHandlers/animalHandler")

const animalRouter = Router();



animalRouter.get("/", getAlls)
animalRouter.post("/", postAnimal)


module.exports = animalRouter