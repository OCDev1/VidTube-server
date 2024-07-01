const videoController = require('../controllers/video');
const express = require('express');
const { authenticateToken } = require('../middlewares/auth');
const multer = require('multer');
const path = require('path');

// Define the storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/uploads/'); // Specify the directory to store uploaded files
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.route('/videos')
  .get(videoController.getVideos);

router.route('/allvideos')
  .get(videoController.getAllVideos);

router.route('/videos/:id')
  .get(videoController.getVideo);

router.route('/users/:id/videos')
  .get(videoController.getVideosByAuthor)
  .post(authenticateToken, upload.fields([{ name: 'img' }, { name: 'video' }]), videoController.createVideo);

router.route('/users/:id/videos/:pid')
  .get(videoController.getUserVideoById)
  .patch(authenticateToken, upload.fields([{ name: 'img' }, { name: 'video' }]), videoController.updateVideo)
  .delete(authenticateToken, videoController.deleteVideo);

router.route('/videos/:id/like')
  .patch(authenticateToken, videoController.likeVideo);

router.route('/videos/:id/dislike')
  .patch(authenticateToken, videoController.dislikeVideo);

module.exports = router;
