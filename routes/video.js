const videoController = require('../controllers/video');
const express = require('express');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.route('/videos')
  .get(videoController.getVideos);

router.route('/users/:id/videos')
  .get(videoController.getVideosByAuthor)
  .post(authenticateToken, videoController.createVideo);

router.route('/users/:id/videos/:pid')
  .get(videoController.getVideo)
  .patch(authenticateToken, videoController.updateVideo)
  .delete(authenticateToken, videoController.deleteVideo);

module.exports = router;
