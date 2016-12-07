var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'No title entered'
    },
    publisher: {
        type: String
    },
    genre: {
        type: String,
        required: 'No genre entered'
    },
    year: {
        type: Number,
        required: 'No year entered'
    }
});
module.exports = mongoose.model('Game', gameSchema);