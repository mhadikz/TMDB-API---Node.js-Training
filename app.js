const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const searchRequest = require('./routes/search');
app.use('/search', searchRequest);

const movieRequest = require('./routes/movie');
app.use('/movie', movieRequest);

const trailerRequest = require('./routes/trailer');
app.use('/trailer', trailerRequest);

//Routes
app.get('/', (req, res) => {
    res.send('We don\'t have anything here yet');
});


//Start listening to the server
app.listen(7777)