const { Router } = require("express");
const {
    getAllDeaths,
    postDeaths,
} = require("../handlers/deathHandlers/deathHandler");

const deathRouter = Router();

deathRouter.get("/", getAllDeaths);
deathRouter.post("/", postDeaths);

module.exports = deathRouter;