const { movieById } = require("../service/tmdb");

module.exports = async function (req, res, next) {
  const id = req.body.id;
  try {
    const movie = await movieById(id);

    if (movie) {
      return res.json({ result: movie });
    } else {
      return res.status(400).json({ error: true, message: `movie not found!` });
    }
  } catch (e) {
    next(e);
  }
};
