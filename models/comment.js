const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Comment = new Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    img: {
        type: String,
        required: true
    },
    videoId: { 
        type: String,
         required: true 
    }
});

module.exports = mongoose.model('Comment', Comment)