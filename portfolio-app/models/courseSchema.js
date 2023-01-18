const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    credits: {
        type: String,
        required: true
    },
    techStack: {
        type: String,
        required: true
    },
    semesterTaken: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema)