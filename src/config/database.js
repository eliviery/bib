/** @constant version gets {static:function, dinamic: [aa.js, arc.js, ... geter.js]} */

const version = require(__dirname.replace('config','lib/script'));

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'eliviery',
    password: 'devpostvierySQL',
    database: version.dinamic,
    define:{
        timestamp: true,
        underscored: true
    }
};
/*
"postgresql":{
        "db":['aa','arc','naa','nbv_p','nvi','nvt','tb','ntlh','kjv','a21'],
        "user":["postgres", "eliviery"],
        "pswd":["elivierypost6891", "devpostvierySQL"]
    },
*/