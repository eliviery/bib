'use strict';

/**
 * @description Added to be handled through sequelize-cli as a Global Dependency (npm add sequelize -D at command line)
 * @constant version gets {static:function, dinamic:[aa.js, acf.js, ... geter.js]}
*/

const version = require(__dirname.replace('database/migrations','lib/script'));
const versionObj = require(__dirname.replace('database/migrations', `lib/${version.dinamic}`));
const refferences = require(__dirname.replace('database/migrations', `lib/refferences`));
const trs = require(__dirname.replace('database/migrations', `lib/translate_abbrev`));

/** @returns Array containing ['abbrev', chapters.length] in each of its indexes */
function counting(bib) {
	var report = [];
	
	for (let i = 0; i < bib.length; i++)
		report.push([ bib[i].abbrev, bib[i].chapters.length ]);

	return report;
}

/** @var data Receives 66 abrevs and its chapters sizes */
var data = counting(versionObj);

module.exports = {
	up: async (queryInterface, Sequelize) => {
	// searching data
		for (let i in data) {
			for (let j = 1; j <= data[i][1]; j++) { // data[i][1] = [abrev_Book_name, Its_size]

				await queryInterface.createTable(`${data[i][0]}`, { // createTable('abrev_Book_name')
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
						type: Sequelize.ARRAY(Sequelize.INTEGER),
						autoIncrement: false,
						aloowNull: false
					},
					verse_text: {
						type: Sequelize.TEXT,
						allowNull: false
					},
					reffers: {
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
			} // End j loop
		} // End i loop
		console.log(`Migration to ${version.dinamic} done.`);
		console.log(data);
	},

	down: async (queryInterface, Sequelize) => {
		for (let i in data) 
			for (let j = 1; j <= data[i][1]; j++)
				await queryInterface.dropTable(`${data[i][0]}`);
	}
};
