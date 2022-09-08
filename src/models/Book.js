
const { Sequelize, DataTypes } = require("sequelize");

const { Model } = require('sequelize');

class Book extends Model {
	static init(connection){
		super.init({
			book_name:DataTypes.STRING(30),
			ch_vs:DataTypes.ARRAY(DataTypes.SMALLINT),
			verse_text:DataTypes.TEXT,
			refference:DataTypes.JSON
		},
		{
			sequelize:connection
		});        
	}
}

module.exports = Book;