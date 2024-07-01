const videoService = require('../services/video');

const createVideo = async (req, res) => {
  const { title, description, author, username, authorImage, uploadTime } = req.body;
  const img = req.files['img'] ? `http://localhost:${process.env.PORT}/uploads/${req.files['img'][0].filename}` : null;
  const video = req.files['video'] ? `http://localhost:${process.env.PORT}/uploads/${req.files['video'][0].filename}` : null;

  try {
      const newVideo = await videoService.createVideo(title, description, author, username, img, video, authorImage, uploadTime);
      res.json(newVideo);
  } catch (error) {
      res.status(500).json({ errors: [error.message] });
  }
};


const getVideos = async (_, res) => {
    res.json(await videoService.getVideos())
};

const getVideo = async (req, res) => {
    const video = await videoService.getVideoById(req.params.id);
    if (!video) {
        return res.status(404).json({ errors: ['The video could not be found.'] });
    }
    res.json(video);
};

const getVideosByAuthor = async (req, res) => {
    const videos = await videoService.getVideosByAuthor(req.params.id);
    if (!videos) {
        return res.status(404).json({ errors: ['The videos could not be found.'] });
    }
    res.json(videos);
};

const getUserVideoById = async (req, res) => {
    const video = await videoService.getUserVideoById(req.params.pid, req.params.id);
    if (!video) {
      return res.status(404).json({ errors: ['The video could not be found.'] });
    }
    res.json(video);
};

const updateVideo = async (req, res) => {
  const { title, description } = req.body;
  const img = req.files['img'] ? `http://localhost:${process.env.PORT}/uploads/${req.files['img'][0].filename}` : undefined;
  const video = req.files['video'] ? `http://localhost:${process.env.PORT}/uploads/${req.files['video'][0].filename}` : undefined;

  try {
      const updatedVideo = await videoService.updateVideo(req.params.pid, title, description, img, video);
      if (!updatedVideo) {
          return res.status(404).json({ errors: ['The video could not be found.'] });
      }
      res.json(updatedVideo);
  } catch (error) {
      res.status(500).json({ errors: [error.message] });
  }
};

const deleteVideo = async (req, res) => {
    const video = await videoService.deleteVideo(req.params.pid);
    if (!video) {
        return res.status(404).json({ errors: ['The video could not be found.'] })
    }
    res.json(video);
};

// Likes on videos
async function likeVideo(req, res) {
    const { id } = req.params;
    const { userDisplayName } = req.body;
  
    try {
      const updatedVideo = await videoService.likeVideo(id, userDisplayName);
      res.status(200).json(updatedVideo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function dislikeVideo(req, res) {
    const { id } = req.params;
    const { userDisplayName } = req.body;
  
    try {
      const updatedVideo = await videoService.dislikeVideo(id, userDisplayName);
      res.status(200).json(updatedVideo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = { createVideo, getVideos, getVideo, updateVideo, deleteVideo, getVideosByAuthor, likeVideo ,dislikeVideo, getUserVideoById };
