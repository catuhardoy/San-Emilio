const { Router } = require("express")
const {
    getAllCaravans,
    postCaravan
} = require("../handlers/caravanHandlers/caravanHandler")

const caravanRouter = Router();



caravanRouter.get("/", getAllCaravans)
caravanRouter.post("/", postCaravan)


module.exports = caravanRouter