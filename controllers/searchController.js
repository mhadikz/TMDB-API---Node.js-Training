const searchModel = require("../models/searchModel");

const searchList = searchModel.getSearchResultFromTMDB;

module.exports = {
  searchList,
};
