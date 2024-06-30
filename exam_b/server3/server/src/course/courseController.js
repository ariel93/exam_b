const Course = require('./Course');

// Create a new Course  
exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await User.find();
    res.status(200).json(Courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


