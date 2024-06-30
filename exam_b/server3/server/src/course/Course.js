const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    unique: true
  },
  numOfStudents: {
    type: Number,
    required: true,
    unique: true
  },
  startYear: {
    type: Number,
    required: true,
    unique: true
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;