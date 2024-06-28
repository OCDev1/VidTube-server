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

async function likeComment(commentId, userDisplayName) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error('Comment not found');
      }
  
      if (!comment.likes.includes(userDisplayName)) {
        comment.likes.push(userDisplayName);
      }
  
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error('Failed to like comment: ' + error.message);
    }
  }
  
  async function unlikeComment(commentId, userDisplayName) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error('Comment not found');
      }
  
      comment.likes = comment.likes.filter(name => name !== userDisplayName);
  
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error('Failed to unlike comment: ' + error.message);
    }
  }

  async function dislikeComment(commentId, userDisplayName) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error('Comment not found');
      }
  
      if (!comment.dislikes.includes(userDisplayName)) {
        comment.dislikes.push(userDisplayName);
      }
  
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error('Failed to like comment: ' + error.message);
    }
  }
  
  async function undislikeComment(commentId, userDisplayName) {
    try {
      const comment = await Comment.findById(commentId);
      if (!comment) {
        throw new Error('Comment not found');
      }
  
      comment.dislikes = comment.dislikes.filter(name => name !== userDisplayName);
  
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error('Failed to unlike comment: ' + error.message);
    }
  }

module.exports = { createComment, getComments, getCommentById, updateComment, deleteComment, getCommentsByVideoId,  likeComment, unlikeComment,dislikeComment ,undislikeComment };