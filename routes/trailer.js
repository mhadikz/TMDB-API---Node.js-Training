const express = require('express');
const axios = require('axios');
const Trailer = require('../models/Trailer');

require('dotenv').config();

const router = express.Router();
const domain = process.env['API_DOMAIN']
const key = process.env['API_KEY']


router.post('/', async (req, res) => {
    try {

        const trailer = new Trailer({
            id: req.body.id
        });

        const id = trailer.id
        const getTrailersList = await axios(`${domain}/movie/${id}/videos?api_key=${key}`);
        const movies = getTrailersList.data.results;
        const trailers = filterTrailers(movies)

        res.json(trailers);

    } catch(err){
        res.json(err);
    }
})


function filterTrailers(result){
    const outPutList = [];
    result.forEach(video => {
        console.log(video.type);
        if(video.type === 'Trailer' && video.site === 'YouTube') {
            const youTubeKey = video.key
            video.trailerLink = `https://www.youtube.com/watch?v=${youTubeKey}`
            outPutList.push(video)
        }
    })
    return outPutList;
}


module.exports = router;