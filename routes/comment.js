const commentController = require('../controllers/comment');

const express = require('express');

const { createComment } = require('../services/comment');

var router = express.Router();

router.route('/')
    .get(commentController.getComments)
    .post(commentController.createComment);

router.route('/:id')
    .get(commentController.getComment)
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment)

module.exports = router;