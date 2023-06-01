const { Router } = require("express")
const {
    getAlls,
    getId,
    postAnimal,
    updateAnimal,
    deleteAnimal
} = require("../handlers/animalHandlers/animalHandler")

const animalRouter = Router();



animalRouter.get("/", getAlls)
animalRouter.get("/:id", getId)
animalRouter.post("/", postAnimal)
animalRouter.put("/", updateAnimal)
animalRouter.delete("/", deleteAnimal)


module.exports = animalRouter