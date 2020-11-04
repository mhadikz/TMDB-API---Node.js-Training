const expressTrailer = require("express");
const routerTrailer = expressTrailer.Router();
const trailerController = require("../controller/trailerController");

routerTrailer.get("/", trailerController);

module.exports = routerTrailer;
