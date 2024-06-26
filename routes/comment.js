const commentController = require('../controllers/comment');
const express = require('express');
const { createComment } = require('../services/comment');
var router = express.Router();

router.route('/comments')
    .get(commentController.getComments)
    .post(commentController.createComment);

router.route('/comments/:id')
    .get(commentController.getComment)
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment)

router.route('/comments/:videoId')
    .get(commentController.getCommentsByVideoId);

module.exports = router;