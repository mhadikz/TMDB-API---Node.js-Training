const { movieTrailers } = require("../service/tmdb");

const filterYoutubeTrailers = (video) => video.type === "Trailer" && video.site === "YouTube";

const youtubeLink = (youtubeId) => `https://www.youtube.com/watch?v=${youtubeId}`;

module.exports = function (req, res, next) {
  const id = req.query.id;
  try {
    const trailers = movieTrailers(id);

    if (trailers) {
      const result = trailers
        .filter(filterYoutubeTrailers)
        .map((video) => ({
          ...video,
          trailerLink: youtubeLink(video.key)
        }));

      res.json({ result });
    } else {
      res.json({ result: [] });
    }

  } catch (e) {
    next(e);
  }
};

