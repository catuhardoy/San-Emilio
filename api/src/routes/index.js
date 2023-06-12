
const { Router } = require("express")
const animalRouter = require("./animal")
const transactionRouter = require("./transaction")
const raceRouter = require("./race")
const caravanRouter = require("./caravan")
const typeTransactionRouter = require("./typeTransaction")
const cowRoundUpRouter = require("./cowRoundUp")
const deathRouter = require("./death")


const routes = Router();

routes.use("/animal", animalRouter)
routes.use("/transaction",transactionRouter)
routes.use("/race",raceRouter)
routes.use("/caravan",caravanRouter)
routes.use("/typeTransaction",typeTransactionRouter)
routes.use("/cowRoundUp",cowRoundUpRouter)
routes.use("/death",deathRouter)

module.exports = routes