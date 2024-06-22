const videoController = require('../controllers/video');

const express = require('express');
const router = express.Router();

router.route('/')
    .get(videoController.getVideos)
    .post(videoController.createVideo);

router.route('/:id')
    .get(videoController.getVideo)
    .patch(videoController.updateVideo)
    .delete(videoController.deleteVideo);

module.exports = router;