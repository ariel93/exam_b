const express = require('express');
const router = express.Router();
const courseController = require('./courseController');

// Create a new course
router.post('/', courseController.createCourse);

// Get all courses
router.get('/', courseController.getAllUsers);

module.exports = router;