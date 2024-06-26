const commentController = require('../controllers/comment');
const express = require('express');
const { createComment } = require('../services/comment');
var router = express.Router();

router.route('/comments')
    .get(commentController.getComments)

    .post(commentController.createComment);

router.route('/users/:id')

router.route('/users/:id/comments')
    .get(commentController.getComment)
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment)

router.route('/users/id/comments/:pid')
    .get(commentController.getCommentsByVideoId);

module.exports = router;