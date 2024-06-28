const commentController = require('../controllers/comment');

const express = require('express');
const router = express.Router();

router.route('/comments')
    .get(commentController.getComments)
    .post(commentController.createComment);

router.route('/comments/:id')
    .get(commentController.getComment)

router.route('/users/:id/comments')
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment)

router.route('/users/:id/comments/:pid')
    .get(commentController.getCommentsByVideoId);

module.exports = router;