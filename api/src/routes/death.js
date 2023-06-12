const { Router } = require("express");
const {
    getAllDeaths,
} = require("../handlers/deathHandlers/deathHandler");

const deathRouter = Router();

deathRouter.get("/", getAllDeaths);

module.exports = deathRouter;