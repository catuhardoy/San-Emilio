const express = require("express")

const app = express();

app.use(express.json())

app.use("/", (req, res) => res.send("Hola mundo cruel"))



module.exports = app