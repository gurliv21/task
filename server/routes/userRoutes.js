const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for user registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
