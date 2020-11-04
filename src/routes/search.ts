const expressSearch = require("express");
const routerSearch = expressSearch.Router();
const searchController = require("../controller/searchController");

routerSearch.get("/", searchController);

module.exports = routerSearch;
