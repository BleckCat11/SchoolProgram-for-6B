const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema =  new Schema({
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Course = mongoose.model('Course', coursesSchema);

module.exports = Course;