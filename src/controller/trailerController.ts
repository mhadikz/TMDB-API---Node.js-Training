import { Request, Response, NextFunction } from 'express';
import { Video } from '../util/interfaces'
const { movieTrailers } = require("../service/tmdb");

const filterYoutubeTrailers = (video: Video) => video.type === "Trailer" && video.site === "YouTube";

const youtubeLink = (youtubeId: number) => `https://www.youtube.com/watch?v=${youtubeId}`;

module.exports = async function (req: Request, res: Response, next: NextFunction) {
  const id = req.body.id;
  try {
    const trailers = await movieTrailers(id);

    if (trailers) {
      const result = trailers
        .filter(filterYoutubeTrailers)
        .map((video: Video) => ({
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

