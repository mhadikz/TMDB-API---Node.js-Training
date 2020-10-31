const { queryMovies } = require("../service/tmdb");

module.exports = async function (req, res, next) {
  const query = req.body.query;
  try {
    const movies = await queryMovies(query);
    
    if (movies) {
      res.json({ result: movies });
    } else {
      res.json({ result: [] });
    }

  } catch (e) {
    next(e);
  }
};
