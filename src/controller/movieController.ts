import { Request, Response, NextFunction } from 'express';
const { movieById } = require("../service/tmdb");

module.exports = async function (req: Request, res: Response, next: NextFunction) {
  const id = req.body.id;
  try {
    const movie = await movieById(id);

    if (movie) {
      res.json({ result: movie });
    } else {
      res.status(400).json({ error: true, message: `movie not found!` });
    }
  } catch (e) {
    next(e);
  }
};
