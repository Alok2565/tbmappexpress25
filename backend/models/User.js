const { DataTypes } = require('sequelize');
const sequelize = require('../config/DbConnection');
const Role = require('./Role');

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    }
});

User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;
