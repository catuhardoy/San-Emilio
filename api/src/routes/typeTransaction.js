const { Router } = require("express")
const {
    getAllTypes,
    getById,
    postType
   
} = require("../handlers/typeTransHandlers/typeTransHandler")

const typeTransactionRouter = Router();



typeTransactionRouter.get("/", getAllTypes)
typeTransactionRouter.get("/:id", getById)
typeTransactionRouter.post("/", postType)


module.exports = typeTransactionRouter