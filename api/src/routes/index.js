
const { Router } = require("express")
const animalRouter = require("./animal")


const routes = Router();

routes.use("/animal", animalRouter)

module.exports = routes