const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');

exports.login = async (req, resp) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }, include: Role });
        if (!user) return resp.status(404).json({ error: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return resp.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign(
            { user_id: user.id, role: user.Role.role_name },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        resp.json({ token });
    } catch (err) {
        resp.status(500).json({ error: err.message });
    }
};
