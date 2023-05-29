const { Router } = require("express")
const {
    getAllTrans,
    postTransaction
} = require("../handlers/transactionHandlers/transactionHandler")

const transactionRouter = Router();



transactionRouter.get("/", getAllTrans)
transactionRouter.post("/", postTransaction)


module.exports = transactionRouter