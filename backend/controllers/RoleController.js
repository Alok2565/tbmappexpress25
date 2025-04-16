const Role = require('../models/Role');

exports.createRole = async (req, resp) => {
    try {
        const { role_name, role_slug, status } = req.body;
        const role = await Role.create({ role_name, role_slug, status });
        resp.status(201).json(role);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};
