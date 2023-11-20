const profileModel = require("../models/Profile")

const getProfile = (req, res) => {
    profileModel.find({})
        .then(profile => res.json(profile))
        .catch(err => res.json(err))
}

const createProfile = (req, res) => {
    profileModel.create(req.body)
        .then(profile => res.json(profile))
        .catch(err => res.json(err))
}

const updateProfile = (req, res) => {
    const id = req.params.id
    profileModel.findByIdAndUpdate({_id: id}, {
        profilePicURL: String,
        bio: String,
        about: String,
        philosophy: String
    })
        .then(profile => res.json(profile))
        .catch(err => res.json(err))
}

const deleteProfile = (req, res) => {
    const id = req.params.id
    profileModel.findByIdAndDelete({_id:id})
        .then(profile => res.json(profile))
        .catch(err => res.json(err))
}

module.exports = {
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}
