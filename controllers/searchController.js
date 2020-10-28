const { queryMovies } = require("../service/tmdb");

module.exports = function (req, res, next) {
  const id = req.query.id;
  try {
    const movies = queryMovies(id);

    if (movies) {
      res.json({ result: movies });
    } else {
      res.json({ result: [] });
    }

  } catch (e) {
    next(e);
  }
};
