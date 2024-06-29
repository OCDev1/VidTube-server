// routes/videos.js

const videoController = require('../controllers/video');
const express = require('express');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.route('/videos')
  .get(videoController.getVideos);

router.route('/videos/:id')
  .get(videoController.getVideo);

router.route('/users/:id/videos')
  .get(videoController.getVideosByAuthor)
  .post(authenticateToken, videoController.createVideo);

router.route('/users/:id/videos/:pid')
  .get(videoController.getUserVideoById)
  .patch(authenticateToken, videoController.updateVideo)
  .delete(authenticateToken, videoController.deleteVideo);

router.route('/videos/:id/like')
  .patch(authenticateToken, videoController.likeVideo);

router.route('/videos/:id/dislike')
  .patch(authenticateToken, videoController.dislikeVideo);

module.exports = router;
