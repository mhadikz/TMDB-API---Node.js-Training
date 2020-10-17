const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Movie', MovieSchema)