const commentService = require('../services/comment');

const createComment = async (req, res) => {
  console.log('Request Body:', req.body);
  res.json(await commentService.createComment(req.body.text, req.body.username, req.body.date, req.body.img, req.body.videoId));
};

const updateComment = async (req, res) => {
    const comment = await commentService.updateComment(req.body.id, req.body.text);
    console.log('Request Body:', req.body);
    if (!comment) {
      return res.status(404).json({ errors: ['Comment not found'] });
    }
    res.json(comment);
  };

const getComments = async (req, res) => {
  res.json(await commentService.getComments());
};

const getComment = async (req, res) => {
  const comment = await commentService.getCommentById(req.params.id);
  if (!comment) {
    return res.status(404).json({ errors: ['Comment not found'] });
  }
  res.json(comment);
};

const getCommentsByVideoId = async (req, res) => {
  const comments = await commentService.getCommentsByVideoId(req.params.videoId);
  res.json(comments);
};

const deleteComment = async (req, res) => {
  const comment = await commentService.deleteComment(req.params.id);
  if (!comment) {
    return res.status(404).json({ errors: ['Comment not found'] });
  }
  res.json(comment);
};



module.exports = { createComment, getComments, updateComment, getComment, deleteComment, getCommentsByVideoId };