const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConnection');

const Role = sequelize.define('Role', {
    role_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    role_slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        define: 1
    },
});

module.exports = Role;
