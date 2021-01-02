
const { Sequelize, DataTypes } = require("sequelize");

const { Model } = require('sequelize');

class Verse extends Model {
    static init(connection){
        
        super.init({                        
            book:DataTypes.STRING(30),
            chapter:DataTypes.INTEGER,
            text:DataTypes.TEXT
            },
            {
                sequelize:connection
            }
        )
    }
}

module.exports = Verse;