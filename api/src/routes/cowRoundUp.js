const { Router } = require("express")
const {
    getCowRound,
    postCowRound,
    getRoundUpById
    
} = require("../handlers/cowRoundUpHandlers/cowRoundUpHandler")

const cowRoundUpRouter = Router();


cowRoundUpRouter.get("/", getCowRound)
cowRoundUpRouter.post("/", postCowRound)
cowRoundUpRouter.get("/:id", getRoundUpById)


module.exports = cowRoundUpRouter