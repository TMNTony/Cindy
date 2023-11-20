const videoModel = require("../models/Videos")

const get_videos = (req, res) => {
    videoModel.find({})
        .then(videos => res.json(videos))
        .catch(err => res.json(err))
}

const create_video = (req, res) => {
    videoModel.create(req.body)
        .then(videos => res.json(videos))
        .catch(err => res.json(err))
}

const update_video = (req, res) => {
    const id = req.params.id
    videoModel.findByIdAndUpdate({_id: id}, {
        videoURL: String,
        caption: String
    })
        .then(videos => res.json(videos))
        .catch(err => res.json(err))
}

const delete_video = (req, res) => {
    const id = req.params.id
    videoModel.findByIdAndDelete({_id:id})
        .then(videos => res.json(videos))
        .catch(err => res.json(err))
}

module.exports = {
    get_videos,
    create_video,
    update_video,
    delete_video
}