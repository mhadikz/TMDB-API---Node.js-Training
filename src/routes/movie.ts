const expressMovie = require("express");
const routerMovie = expressMovie.Router();
const moveController = require("../controller/movieController");

routerMovie.get("/", moveController);

module.exports = routerMovie;
