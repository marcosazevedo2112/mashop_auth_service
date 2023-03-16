const { Sequelize, DataTypes } = require('sequelize');
const connection = require("../connection/database.js");

const User = connection.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bday: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

// Create table if not exists
//User.sync({force:true});

module.exports = User;