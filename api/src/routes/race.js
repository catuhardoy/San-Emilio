const { Router } = require("express")
const {
    getAllRaces,
    postRace
} = require("../handlers/raceHandlers/raceHandler")

const raceRouter = Router();



raceRouter.get("/", getAllRaces)
raceRouter.post("/", postRace)


module.exports = raceRouter