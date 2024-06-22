const commentService = require('../services/comment');

const createComment = async (req,res) => {
    res.json(await commentService.createComment(req.body.text, req.body.username, req.body.date, req.body.img));
};

const getComments = async (req, res) => {
    res.json(await commentService.getComments());
};

const getComment = async (req, res) => {
    const comment = await commentService.getCommentById(req.params.id);
    if (!comment) {
        return res.status(404).json({ errors: ['Comment not found']});
    }
    res.json(comment)
};

const deleteComment = async (req, res) => {
    const comment = await commentService.deleteComment(req.params.id);
    if (!comment) {
        return res.status(404).json({ errors: ['Comment not found']});
    }
    res.json(comment)
}

const updateComment = async (req,res) => {
    const comment = await commentService.updateComment(req.params.id, req.body.text);
    if (!comment) {
        return res.status(404).json({ errors: ['Comment not found']});
    }
    res.json(comment)
}

module.exports = { createComment, getComments, updateComment, getComment, deleteComment }