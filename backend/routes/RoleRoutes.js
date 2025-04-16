const express = require('express');
const router = express.Router();
const { createRole } = require('../controllers/RoleController');
const { verifyRole } = require('../middlewares/AuthMiddleware');

router.post('/create', verifyRole('admin'), createRole);

module.exports = router;
