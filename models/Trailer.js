const mongoose = require('mongoose')

const TrailerSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Trailer', TrailerSchema)