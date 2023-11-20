const pictureModel = require("../models/Pictures")

const get_picture = (req, res) => {
    pictureModel.find({})
        .then(pictures => res.json(pictures))
        .catch(err => res.json(err))
}
const create_picture = (req, res) => {
    pictureModel.create(req.body)
        .then(pictures => res.json(pictures))
        .catch(err => res.json(err))
}
const update_picture = (req, res) => {
    const id = req.params.id
    pictureModel.findByIdAndUpdate({_id: id}, {
        pictureURL: String,
        caption: String
    })
        .then(pictures => res.json(pictures))
        .catch(err => res.json(err))
}
const delete_picture = (req, res) => {
    const id = req.params.id
    pictureModel.findByIdAndDelete({_id: id})
        .then(pictures => res.json(pictures))
        .catch(err => res.json(err))
}

module.exports = {
    get_picture,
    update_picture,
    create_picture,
    delete_picture
}