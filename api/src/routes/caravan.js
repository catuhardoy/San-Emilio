const { Router } = require("express")
const {
    getAllCaravans,
    getCaravanId,
    postCaravan
} = require("../handlers/caravanHandlers/caravanHandler")

const caravanRouter = Router();



caravanRouter.get("/", getAllCaravans)
caravanRouter.get("/:id", getCaravanId)
caravanRouter.post("/", postCaravan)



module.exports = caravanRouter