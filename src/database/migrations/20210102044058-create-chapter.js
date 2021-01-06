'use strict';

/** @constant version gets {static:function, dinamic:[aa.js, acf.js, ... geter.js]} */

const version = require(__dirname.replace('database/migrations','lib/script'));
const versionObj = require(__dirname.replace('database/migrations', `lib/${version.dinamic}`));
const refferences = require(__dirname.replace('database/migrations', `lib/refferences`));

/** @returns Array containing ['abbrev', chapters.length] at each one of indexes */
function counting(bib) {
  var report = [];

  for (let i = 0; i < bib.length; i++)
    report.push([ bib[i].abbrev, bib[i].chapters.length ]);

  return report;
}

/** @var data Receives 66 abrevs and its chapters quantities */
var data = counting(versionObj);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // searching data
    
    console.log(`Migration to ${version.dinamic}`);
    console.log(data);

    for (let i in data) {
      for (let j = 1; j <= data[i][1]; j++) {

        await queryInterface.createTable(`${data[i][0]}`, {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            aloowNull: false
          },
          book_name: {
            type: Sequelize.STRING(30),
            allowNull: false
          },
          ch_vs: {
            type: Sequelize.ARRAY(Sequelize.SMALLINT),
            foreignKey: true,
            autoIncrement: false,
            aloowNull: false
          },
          verse_text: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          refference: {
            type: Sequelize.JSON,
            allowNull: false
          },
          created_at: {
            type: Sequelize.DATE,
            aloowNull: false
          },
          updated_at: {
            type: Sequelize.DATE,
            aloowNull: false
          },
        });
      }// End j loop
    }// End i loop
  },

  down: async (queryInterface, Sequelize) => {
    for (let i in data) {
      for (let j = 1; j <= data[i][1]; j++) {
        await queryInterface.dropTable(`${data[i][0]}`);
      }
    }
  }
};
