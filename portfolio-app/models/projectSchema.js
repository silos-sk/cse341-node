const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
        required: true
    },
    gitHubUrl: {
        type: String,
        required: true
    },
    techStack: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    imgUrl_sm: {
        type: String,
        required: true
    },
    imgUrl_lg: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema)