const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/UserController');
// Optional: Protect with admin middleware
// const { verifyRole } = require('../middlewares/authMiddleware');

// router.post('/create', verifyRole('admin'), createUser);
router.post('/create', createUser);

module.exports = router;
