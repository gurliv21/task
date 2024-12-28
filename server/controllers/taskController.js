const Task = require('../models/taskModel');


const createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  try {
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      user: req.user._id, 
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Error creating task' });
  }
};

// Get all tasks for authenticated user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching tasks' });
  }
};

// Update task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Update task details
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.dueDate = req.body.dueDate || task.dueDate;
    task.priority = req.body.priority || task.priority;
    task.status = req.body.status || task.status;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: 'Error updating task' });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.remove();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting task' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
