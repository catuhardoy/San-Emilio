const { Router } = require("express")
const {
    getAllRaces,
    getRaceId,
    postRace,
    raceDelete
} = require("../handlers/raceHandlers/raceHandler")

const raceRouter = Router();



raceRouter.get("/", getAllRaces)
raceRouter.get("/:id", getRaceId)
raceRouter.post("/", postRace)
raceRouter.delete("/", raceDelete )


module.exports = raceRouter