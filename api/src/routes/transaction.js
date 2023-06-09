const { Router } = require("express")
const {
    getAllTrans,
    getById,
    postTransaction
} = require("../handlers/transactionHandlers/transactionHandler")

const transactionRouter = Router();



transactionRouter.get("/", getAllTrans)
transactionRouter.get("/:id", getById)
transactionRouter.post("/", postTransaction)


module.exports = transactionRouter