const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.createUser = async (req, resp) => {
    try {
        const { username, email, password, role_id } = req.body;

        // Validate required fields
        if (!username || !email || !password || !role_id) {
            return resp.status(400).json({ error: 'All fields are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role_id,
        });

        resp.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role_id: newUser.role_id,
            },
        });
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};
