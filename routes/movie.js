const express = require('express');
const axios = require('axios');
const Movie = require('../models/Movie');

require('dotenv').config();

const router = express.Router();
const domain = process.env['API_DOMAIN']
const key = process.env['API_KEY']


router.post('/', async (req, res) => {
    try {

        const movie = new Movie({
            id: req.body.id
        });

        const id = movie.id
        const getMovieDetail = await axios(`${domain}/movie/${id}?api_key=${key}`);

        res.json(getMovieDetail.data);

    } catch(err){
        res.json(err);
    }
})


module.exports = router;