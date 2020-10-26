const axios = require("axios");
require("dotenv").config();
const domain = process.env["API_DOMAIN"];
const key = process.env["API_KEY"];

const getSearchResultFromTMDB = async (req, res) => {
  try {
    const search = req.body.query;
    const searchQuery = search.replace(" ", "+");
    const getMovies = await axios(
      `${domain}/search/movie?api_key=${key}&query=${searchQuery}`
    );

    res.json(getMovies.data);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getSearchResultFromTMDB,
};
