const Comment = require('../models/comment')

const createComment = async (text, username, date, img) => {
    const comment = new Comment({ text: text, username: username, img: img });
    if (date) comment.date = date;
    return await comment.save();
};

const getComments = async () => {
    return await Comment.find({});
};

const getCommentById = async (id) => { return await Comment.findById(id); };

const updateComment = async (id, text) => {
    const comment = await getCommentById(id);
    if (!comment) return null;
    comment.text = text;
    await comment.save();
    return comment;
}

const deleteComment = async (id) => {
    const comment = await getCommentById(id);
    if (!comment) return null;
    await comment.deleteOne();
    return comment;
}

module.exports = { createComment, getComments, getCommentById, updateComment, deleteComment }