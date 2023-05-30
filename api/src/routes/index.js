
const { Router } = require("express")
const animalRouter = require("./animal")
const transactionRouter = require("./transaction")
const raceRouter = require("./race")
const caravanRouter = require("./caravan")


const routes = Router();

routes.use("/animal", animalRouter)
routes.use("/transaction",transactionRouter)
routes.use("/race",raceRouter)
routes.use("/caravan",caravanRouter)

module.exports = routes