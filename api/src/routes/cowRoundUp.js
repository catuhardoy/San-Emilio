const { Router } = require("express")
const {
    getCowRound,
    postCowRound
    
} = require("../handlers/cowRoundUpHandlers/cowRoundUpHandler")

const cowRoundUpRouter = Router();



cowRoundUpRouter.get("/", getCowRound)
cowRoundUpRouter.post("/", postCowRound)


module.exports = cowRoundUpRouter