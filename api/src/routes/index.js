
const { Router } = require("express")
const animalRouter = require("./animal")
const transactionRouter = require("./transaction")


const routes = Router();

routes.use("/animal", animalRouter)
routes.use("/transaction",transactionRouter)

module.exports = routes