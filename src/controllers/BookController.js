/** 
 *  @var version gets {static:function, dinamic: [aa.js, arc.js, ... geter.js]}
 *  @var versionObj get a bible version module from /lib/<version> parsing version.dinamic as directory in parameter
 *  @var refferences get a bible refferences matrix module from /lib/<refferences>
 *  @exports function store in database
 *  @returns void
*/

var version       = require(__dirname.replace('/controllers', '/lib/script'));
var versionObj    = require(__dirname.replace('/controllers', `/lib/${version.dinamic}`));
var refferences   = require(__dirname.replace('/controllers', `/lib/refferences`));
const { request } = require('express');
const Book = require('../models/Book');

module.exports = {
    async index(request, response){
        const verses = await Book.findAll();
        return response.json(verses);
    },

    async store(request, response) {
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
                    
                    // Set current tableName to Model. It'll be some like 'bookAbbrev_chapterNum'
                    Book.tableName = `${versionObj[i].abbrev}`;
                    
                    // Calls Model to insert into database
                    const vs = await Book.create(report);

                    // Pushing to general report
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
        return response.json(genReport);
    }
}