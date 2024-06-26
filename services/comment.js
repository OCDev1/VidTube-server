const Comment = require('../models/comment');

const createComment = async (text, username, date, img, videoId) => {
    const comment = new Comment({ text, username, date, img, videoId });
    try {
      const savedComment = await comment.save();
      return savedComment; // Return the saved comment object
    } catch (error) {
        console.log('Request Body:', text, username, date, img, videoId);
      throw new Error(error.message); // Handle any errors that occur during saving
    }
  };
  
  

const getComments = async () => {
  return await Comment.find({});
};

const getCommentsByVideoId = async (videoId) => {
  return await Comment.find({ videoId });
};

const getCommentById = async (id) => {
  return await Comment.findById(id);
};

const updateComment = async (id, text) => {
  const comment = await getCommentById(id);
  if (!comment) return null;
  comment.text = text;
  await comment.save();
  return comment;
};

const deleteComment = async (id) => {
  const comment = await getCommentById(id);
  if (!comment) return null;
  await comment.deleteOne();
  return comment;
};

module.exports = { createComment, getComments, getCommentById, updateComment, deleteComment, getCommentsByVideoId };