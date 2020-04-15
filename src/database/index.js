const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');
const Addresses = require('../model/Addresses');

const connection = new Sequelize(dbConfig);

User.init(connection);
Addresses.init(connection);

Addresses.associate(connection.models);

module.exports = connection;
