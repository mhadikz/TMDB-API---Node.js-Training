const axios = require("axios");
require("dotenv").config();
const domain = process.env["API_DOMAIN"];
const key = process.env["API_KEY"];

const getTrailerListFromTMDB = async (req, res) => {
  try {
    const id = req.body.id;

    const getTrailersList = await axios(
      `${domain}/movie/${id}/videos?api_key=${key}`
    );
    const movies = getTrailersList.data.results;
    res.json(movies);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getTrailerListFromTMDB,
};
