const {Sequelize} = require('sequelize');
require('dotenv-safe').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb'
})

module.exports = sequelize;