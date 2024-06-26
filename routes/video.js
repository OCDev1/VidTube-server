const videoController = require('../controllers/video');

const express = require('express');
const router = express.Router();

router.route('/videos')
    .get(videoController.getVideos);

router.route('/users/:id/videos')
    .get(videoController.getVideos)
    .post(videoController.createVideo);


router.route('/users/:id/videos/:pid')
    .get(videoController.getVideo)
    .patch(videoController.updateVideo)
    .delete(videoController.deleteVideo);

module.exports = router;