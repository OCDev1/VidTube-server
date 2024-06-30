const videoService = require('../services/video');

const createVideo = async (req, res) => {
    res.json(await videoService.createVideo(req.body.title, req.body.description,
                                            req.body.author, req.body.username,
                                            req.body.img, req.body.video, req.body.authorImage))
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
    const video = await videoService.updateVideo(req.params.pid, req.body.title, req.body.description, req.body.img, req.body.video);
    if (!video) {
        return res.status(404).json({ errors: ['The video could not be found.'] });
    }
    res.json(video);
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
