const movieModel = require("../models/movieModel");

const getMovieDetail = movieModel.getMovieFromTMDB;

module.exports = {
  getMovieDetail,
};
