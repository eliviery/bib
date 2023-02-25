/** 
 *  @var version gets {static:function, dinamic: [aa.js, arc.js, ... geter.js]}
 *  @var versionObj get a bible version module from /lib/<version> parsing version.dinamic as directory in parameter
 *  @var refferences get a bible refferences matrix module from /lib/<refferences>
 *  @exports function store in database
*/

var version = require(__dirname.replace('/controllers', '/lib/script'));
var versionObj = require(__dirname.replace('/controllers', `/lib/${version.dinamic}`));
var refferences = require(__dirname.replace('/controllers', '/lib/refferences'));
const trs = require(__dirname.replace('/controllers', '/lib/translate_abbrev'));
const Book = require('../models/Book');
const sequelize = require('sequelize');

module.exports = {
	/** The index module lists the JSON outputs to Front End */
	async index(req, res) {

		const { book, ch } = req.query;
		/* Forces table name
		 * ["VALUE_IF_FALSE","VALUE_IF_TRUE"][BoolExpression & 1]
		*/
		Book.tableName = [book, trs[book]][(version.dinamic == 'kjv') & 1];
		const regEx = [
			[/\{/g, '('],
			[/\}/g, ')'],
			[/^\s{1}/g, ""],
			[/S(\s|\t)/g, 'S'],
			[/\s([,.;?!:])/g, '$1']
		];
		const verses = await Book.findAll({
			attributes: [`id`, `book_name`, `ch_vs`, `verse_text`, `reffers`],
			where: sequelize.literal(`ch_vs[1] = ${ch}`), // WHERE LITERAL
			order: ['id']
		});

		for (verse of verses) { // Table Lines
			let cruz = {}; // All getted statments from cruzed
			let cruzed = [];
			for (let each in verse['reffers']) { // Searching JSON/Object only from reffers column at current item
				Book.tableName = each;
				let crzEach = verse['reffers'][each];
				cruz[each] = { "book_name": "" };
				for (let item in crzEach) { // Searches all of refferences from a unique book in refference's list
					// Tratamento de referências com versículos de um só capítulo
					// Se os itens do array de versículos também forem arrays, significa que são trechos isolados por todo o capítulo.
					// Eles serão tratados para exibir corretamente a saída

					let it = crzEach[item];

					let f = it.find(e => typeof e == 'object'); // Searches if there's at least 1 vector into the verse array
					let range = `${['noarray', `${item}:${it.join('-')}`][f == undefined & 1]}`; // ["IF_FALSE","IF_TRUE"][BoolExpression & 1]

					cruz[each][range] = [];

					for (let x in it) {
						let crzRef = {};
						if (typeof it[x] == 'object') { // If it is an Object
							delete cruz[each]['noarray']; // remove early key for new key foward
							for (let i = it[x][0]; i <= it[x][it[x].length - 1]; i++) {
								crzRef = await Book.findAll({
									attributes: ['id', 'book_name', 'ch_vs', 'verse_text'],
									where: { ch_vs: [parseInt(item), i] }
								});
							}
							// To the refference for API output, range equals to object key. It looks like:
							// { "range_content": ["1st verse here","2nd verse here (if any)"..."N_th verse here (if any)"] }

							range = `${item}:${it[x][0]}${["", "-" + it[x][1]][(it[x].length > 1) & 1]}`; // ["IF_FALSE","IF_TRUE"][BoolExpression & 1]
							cruz[each][range] = []; // Avoid again if earlier code doesn't work
						} else {
							crzRef = await Book.findAll({
								attributes: ['id', 'book_name', 'ch_vs', 'verse_text'],
								where: { ch_vs: [parseInt(item), it[x]] }
							});
						}
						regEx.map((r) => {crzRef[0]['verse_text'] = crzRef[0]['verse_text'].replace(r[0], r[1]); return 1});

						cruz[each]['book_name'] = crzRef[0]['book_name'];
						cruz[each][range].push(' ' + crzRef[0]['verse_text']);
					}
				}
			}
			regEx.map((r) => {verse['verse_text'] = verse['verse_text'].replace(r[0], r[1]); return 1});

			verse['reffers'] = cruz;
			cruz = {};
		}
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
					report['ch_vs'] = [parseInt(j) + 1, parseInt(l) + 1];
					report['verse_text'] = versionObj[i].chapters[j][l];
					report['reffers'] = refferences[i].chapters[j][l];

					if (version.dinamic == 'kjv') { // If the version of the current database is KJV, the abbreviations keys will be translated
						for (key of Object.keys(report['reffers'])) {
							let obtemp = report['reffers'][key];
							delete report['reffers'][key];
							report['reffers'][trs[key]] = obtemp;
						}
					}
					// Set current tableName to Model. It'll be something like 'bookAbbrev'
					Book.tableName = `${versionObj[i].abbrev}`;

					// Calls Model to execute builded queries by report, into database
					const vs = await Book.create(report);

					// Filling Output GeneralReport data provider to Front-End applications
					genReport.push({
						book_name: report['book_name'],
						ch_vs: report['ch_vs'],
						verse_text: report['verse_text'],
						reffers: report['reffers']
					});
				}
			}
		}
		console.log(`Filling database ${version.dinamic} right now\n`);
		return res.json(genReport); // General Report to Front-End apps (From this case, Insomnia)
	},

	async change(req, res) {

		const { book, ch_vs, reffers } = req.body;
		/* Forces table name
		 * ["VALUE_IF_FALSE","VALUE_IF_TRUE"][BoolExpression & 1]
		*/
		Book.tableName = [book, trs[book]][(version.dinamic == 'kjv') & 1];

		const new_ref = await Book.update(
			{ reffers },
			{ where: { ch_vs } }
		);
		return res.json(req.body);
	}
}