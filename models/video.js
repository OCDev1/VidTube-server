const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Video = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    views: {
      type: String,
      default: 0,
    },
    img: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: true
    },
    uploadTime: {
      type: Date,
      default: Date.now,
    },
    authorImage: {
      type: String,
      required: true
    }
  });


module.exports = mongoose.model('Video', Video);
