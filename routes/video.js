const videoController = require('../controllers/video');

const express = require('express');
const router = express.Router();

router.route('/videos')
    .get(videoController.getVideos);

router.route('/videos/:id')
    .get(videoController.getVideo);

router.route('/users/:id/videos')
    .get(videoController.getVideosByAuthor)
    .post(videoController.createVideo);


router.route('/users/:id/videos/:pid')
    .get(videoController.getVideo)
    .patch(videoController.updateVideo)
    .delete(videoController.deleteVideo);

router.route('/videos/:id/like')
    .patch(videoController.likeVideo);

router.route('/videos/:id/dislike')
    .patch(videoController.dislikeVideo);

module.exports = router;