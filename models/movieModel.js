const axios = require("axios");
require("dotenv").config();
const domain = process.env["API_DOMAIN"];
const key = process.env["API_KEY"];

const getMovieFromTMDB = async (req, res) => {
  try {
    const id = req.body.id;
    const getMovieDetail = await axios(`${domain}/movie/${id}?api_key=${key}`);

    res.json(getMovieDetail.data);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getMovieFromTMDB,
};
