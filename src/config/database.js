
// temporary change in the directry, just like create table migration
//const versions = require(__dirname.replace('database/migrations','lib/scripts'));

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'eliviery',
    password: 'devpostvierySQL',
    database: 'nvt',
    define:{
        timestamp: true,
        underscored: true
    }
}
/*
"postgresql":{
        "nick":"PostgreSQL",
        "user":["postgres", "eliviery"],
        "pswd":["elivierypost6891", "devpostvierySQL"]
    },
*/