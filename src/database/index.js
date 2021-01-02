
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Verse =  require('../models/Verse');
const conn = new Sequelize(dbConfig);

Verse.init(conn);

module.exports = conn;