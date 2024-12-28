const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

// Routes for task operations
router.post('/', protect, createTask); // Create task
router.get('/', protect, getTasks); // Get tasks for logged-in user
router.put('/:id', protect, updateTask); // Update task
router.delete('/:id', protect, deleteTask); // Delete task

module.exports = router;
