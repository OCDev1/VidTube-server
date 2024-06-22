const videoService = require('../services/video');

const createVideo = async (req, res) => {
    res.json(await videoService.createVideo(req.body.title, req.body.description,
                                            req.body.author, req.body.img,
                                            req.body.video, req.body.authorImage))
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

const updateVideo = async (req, res) => {
    const video = await videoService.updateVideo(req.params.id, req.body.title, req.body.description, req.body.img, req.body.video);
    if (!video) {
        return res.status(404).json({ errors: ['The video could not be found.'] });
    }
    res.json(video);
};

const deleteVideo = async (req, res) => {
    const video = await videoService.deleteVideo(req.params.id);
    if (!video) {
        return res.status(404).json({ errors: ['The video could not be found.'] })
    }
    res.json(video);
};

module.exports = { createVideo, getVideos, getVideo, updateVideo, deleteVideo};