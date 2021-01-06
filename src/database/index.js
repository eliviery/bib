
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Book =  require('../models/Book');
const conn = new Sequelize(dbConfig);

Book.init(conn);

module.exports = conn;