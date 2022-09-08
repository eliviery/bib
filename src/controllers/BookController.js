/** 
 *  @var version gets {static:function, dinamic: [aa.js, arc.js, ... geter.js]}
 *  @var versionObj get a bible version module from /lib/<version> parsing version.dinamic as directory in parameter
 *  @var refferences get a bible refferences matrix module from /lib/<refferences>
 *  @exports function store in database
 *  @returns void
*/

var version       = require(__dirname.replace('/controllers', '/lib/script'));
var versionObj    = require(__dirname.replace('/controllers', `/lib/${version.dinamic}`));
var refferences   = require(__dirname.replace('/controllers', '/lib/refferences'));
const { req } = require('express');
const Book = require('../models/Book');
const sequelize = require('sequelize');

module.exports = {
	/**
	 * The index module lists the JSON outputs to Front End
	*/
	async index(req, res){
		Book.tableName = req['query']['book']; // Forces table name

		const verses = await Book.findAll({
			where:{
				ch_vs:[req['query']['ch'],req['query']['vs']]
			}
		});
		const cruz = {};

		for (let each in verses[0]['refference']){ // Searching table's refference column JSON/Object
			Book.tableName = each;
			let crzEach = verses[0]['refference'][each];
			cruz[each] = {"book_name":""};
			for (let item in crzEach){ // Searches all of refferences from a unique book in refference's list
				/* Tratamento de referências com versículos de um só capítulo
				 * Se os itens do array de versículos também forem arrays, significa que são trechos isolados por todo o capítulo.
				 * Eles serão tratados para exibir corretamente a saída
				*/
				let it = crzEach[item];

				let f = it.find(e => typeof e == 'object'); // Searches if there's at least 1 into the verse array
				let range = `${ f == undefined ? `${item}:${it.join('-')}` : 'noarray'}`;
				
				cruz[each][range] = [];
				
				for (let x in it){
					let crzRef = {};
					if (typeof it[x] == 'object'){
						delete cruz[each]['noarray'];
						for (let i = it[x][0]; i <= it[x][it[x].length - 1]; i++){
							crzRef = await Book.findAll({
								attributes:['id','book_name','ch_vs','verse_text'],
								where:{
									ch_vs:[parseInt(item), i]
								}
							});
						}
						range = `${item}:${it[x][0]}${it[x].length > 1 ? "-" + it[x][1] : ""}`;
						cruz[each][range] = [];
					}else{
						crzRef = await Book.findAll({
							attributes:['id','book_name','ch_vs','verse_text'],
							where:{
								ch_vs:[parseInt(item), it[x]]
							}
						});
					}
					cruz[each]['book_name'] = crzRef[0]['book_name'];
					cruz[each][range].push(crzRef[0]['verse_text']);
				}
			}
		}
		verses[0]['refference'] = cruz;
		return res.json(verses);
	},

	async store(req, res) { // Inserts an entire specific Bible's version from lib/<versions>
		/**
		 *  @var {book, rf, text} report
		 *  @var genReport [report_1, report_2, ...report_n]
		*/
		var genReport = [];

		// Searches versionObj by 1st loop
		for (let i = 0; i < versionObj.length; i++) {
			var report = {};
			// Get the book name
			report['book_name'] = versionObj[i].name;

			// Searches the current book chapter by 2nd loop
			for (let j in versionObj[i].chapters) {
				// Get current chapter

				// Searches the current chapter verse by 3rd loop
				for (let l in versionObj[i].chapters[j]) {
		
					// Get current verse from current chapter
					report['ch_vs']      = [ parseInt(j) + 1, parseInt(l) + 1];
					report['verse_text'] =  versionObj[ i ].chapters[ j ][ l ];
					report['refference'] = refferences[ i ].chapters[ j ][ l ];
					
					// Set current tableName to Model. It'll be some like 'bookAbbrev'
					Book.tableName = `${versionObj[i].abbrev}`;
					
					// Calls Model to execute builded queries by report, into into database
					const vs = await Book.create(report);

					// Filling Output GeneralReport data provider to Front-End applications
					genReport.push({
						book_name : report['book_name'],
						ch_vs     :     report['ch_vs'],
						verse_text:report['verse_text'],
						refference:report['refference']
					});
				}
			}
		}
		console.log(`Filling database ${version.dinamic} right now\n`);
		return res.json(genReport); // General Report to Front-End apps (From this case, Insomnia)
	}
}