/** @constant version gets {static:function, dinamic: [aa.js, arc.js, ... geter.js]} */

const version = require(__dirname.replace('config','lib/script'));
/* from .sequelizerc, replace path from "src/config" to "src/lib/script" */

module.exports = {
    dialect: 'postgres',
    host: 'localhost', //'127.0.0.1',
    username: 'eliviery',
    password: 'devpostvierySQL',
    database: version.dinamic,
    define:{
        timestamp: true,
        underscored: true
    }
};