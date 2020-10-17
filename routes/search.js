const express = require('express');
const axios = require('axios');
const Search = require('../models/Search');

require('dotenv').config();

const router = express.Router();
const domain = process.env['API_DOMAIN']
const key = process.env['API_KEY']

router.post('/', async (req, res) => {
    try {
        const search = new Search({
            query: req.body.query
        });

        const searchQuery = search.query.replace(" ", "+")
        const getMovies = await axios(`${domain}/search/movie?api_key=${key}&query=${searchQuery}`);

        res.json(getMovies.data);

    } catch(err){
        res.json(err);
    }
})

module.exports = router;