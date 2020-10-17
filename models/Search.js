const mongoose = require('mongoose')

const SearchSchema = mongoose.Schema({
    query:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Search', SearchSchema)