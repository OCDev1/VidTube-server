const Video = require('../models/video');

const createVideo = async (title, description, author, username, img, video, authorImage, uploadTime) => {
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
  return await cur_video.save();
};

const getVideos = async () => { 
  return await Video.find({});
};

const getVideoById = async (id) => {
  return await Video.findById(id);
};

const getUserVideoById = async (pid) => {
  return await Video.findById(pid);
};

const getVideosByAuthor = async (id) => {
  return await Video.find({ username: id });
}

const updateVideo = async (id, title, description, img, video) => {
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
}

const deleteVideo = async (id) => {
  const video = await getVideoById(id);
  if (!video) {
    return null;
  }
  await video.deleteOne();
  return video;
}

module.exports = { createVideo, getVideos, getVideoById, updateVideo, deleteVideo , getVideosByAuthor, getUserVideoById };