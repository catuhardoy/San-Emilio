const { Router } = require("express")
const {
    getAllTypes,
    postType
   
} = require("../handlers/typeTransHandlers/typeTransHandler")

const typeTransactionRouter = Router();



typeTransactionRouter.get("/", getAllTypes)
typeTransactionRouter.post("/", postType)


module.exports = typeTransactionRouter