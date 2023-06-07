const { Router } = require("express")
const {
    getAllRaces,
    getRaceId,
    postRace
} = require("../handlers/raceHandlers/raceHandler")

const raceRouter = Router();



raceRouter.get("/", getAllRaces)
raceRouter.get("/:id", getRaceId)
raceRouter.post("/", postRace)


module.exports = raceRouter