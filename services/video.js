const Video = require('../models/video');
const Comment = require('../models/comment');

const createVideo = async (title, description, author, username, img, video, authorImage, uploadTime, views) => {
  try {
    const cur_video = new Video({
      title: title,
      description: description,
      author: author,
      username: username,
      img: img,
      video: video,
      authorImage: authorImage
    });
    if (uploadTime) { 
      cur_video.uploadTime = uploadTime;
    }
    if (views) {
      cur_video.views = views;
    }
    return await cur_video.save();
  } catch (error) {
    throw error;
  }
};

const getVideos = async () => { 
  try {
    return await Video.find({});
  } catch (error) {
    throw error;
  }
};

const getVideoById = async (id) => {
  try {
    return await Video.findById(id);
  } catch (error) {
    throw error;
  }
};

const getUserVideoById = async (pid, username) => {
  try {
    return await Video.findOne({ _id: pid, username });
  } catch (error) {
    throw error;
  }
};

const getVideosByAuthor = async (id) => {
  try {
    return await Video.find({ username: id });
  } catch (error) {
    throw error;
  }
}

const updateVideo = async (id, title, description, img, video) => {
  try {
    const cur_video = await getVideoById(id);
    if (!cur_video) {
      return null;
    }
    cur_video.title = title;
    cur_video.description = description;
    cur_video.img = img;
    cur_video.video = video;
    await cur_video.save();
    return cur_video;
  } catch (error) {
    throw error;
  }
}

const deleteVideo = async (id) => {
  try {
    const video = await getVideoById(id);
    if (!video) {
      return null;
    }
    await video.deleteOne();
    await Comment.deleteMany({ videoId: id });
    return video;
  } catch (error) {
    throw error;
  }
}


// likes on Videos
async function likeVideo(videoId, userDisplayName) {
  try {
    const video = await Video.findById(videoId);
    if (!video) throw new Error('Video not found');

    // Check if user is already in likes array
    if (video.likes.includes(userDisplayName)) {
      // Remove user from likes array
      video.likes = video.likes.filter(name => name !== userDisplayName);
    } else {
      // Add user to likes array
      video.likes.push(userDisplayName);
    }

    // Ensure user is removed from dislikes array
    video.dislikes = video.dislikes.filter(name => name !== userDisplayName);

    await video.save();
    return video;
  } catch (error) {
    throw error;
  }
}


async function dislikeVideo(videoId, userDisplayName) {
  try {
    const video = await Video.findById(videoId);
    if (!video) throw new Error('Video not found');

    // Check if user is already in dislikes array
    if (video.dislikes.includes(userDisplayName)) {
      // Remove user from dislikes array
      video.dislikes = video.dislikes.filter(name => name !== userDisplayName);
    } else {
      // Add user to dislikes array
      video.dislikes.push(userDisplayName);
    }

    // Ensure user is removed from likes array
    video.likes = video.likes.filter(name => name !== userDisplayName);

    await video.save();
    return video;
  } catch (error) {
    throw error;
  }
}

module.exports = { createVideo, getVideos, getVideoById, updateVideo, deleteVideo , getVideosByAuthor, likeVideo, dislikeVideo, getUserVideoById };
