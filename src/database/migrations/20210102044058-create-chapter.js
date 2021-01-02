'use strict';

// temporary change in the directry, just like create table migration
const nvt = require(__dirname.replace('database/migrations','lib/aa'));

// temporary function to extract the books abreviations and its chapter quantities
function counting(bib) {
  var report = [];

  for (let i = 0; i < bib.length; i++)
    report.push([ bib[i].abbrev, bib[i].chapters.length ]);

  return report;
}

// data receives 66 abrevs and its chapters quantities
var data = counting(nvt);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // searching data
    for (let i in data) {
      for (let j = 1; j <= data[i][1]; j++) {

        await queryInterface.createTable(`${data[i][0]}_${j}`, {
          verse_num: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            aloowNull: false
          },
          ref_num: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            aloowNull: false
          },
          book: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          chapter: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          text: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          created: {
            type: Sequelize.DATE,
            aloowNull: false
          },
          updated: {
            type: Sequelize.DATE,
            aloowNull: false
          },
        });
      }//fim do for j
    }//fim do for i
    
    console.log(data);
  },

  down: async (queryInterface, Sequelize) => {
    for (let i in data) {
      for (let j = 1; j <= data[i][1]; j++) {
        await queryInterface.dropTable(`${data[i][0]}_${j}`);
      }
    }

  }
};
