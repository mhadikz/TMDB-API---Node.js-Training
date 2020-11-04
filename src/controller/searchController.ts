import { Request, Response, NextFunction } from 'express';
const { queryMovies } = require("../service/tmdb");

module.exports = async function (req: Request, res: Response, next: NextFunction) {
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