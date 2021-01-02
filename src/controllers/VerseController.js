/** 
 *  @var version gets {static:function, dinamic: [aa.js, acf.js, ... geter.js]}
 *  @var versionObj get a bible version module from /lib/<version> parsing version.dinamic[index] as parameter
 *  @exports
 *  @returns
*/

var version = require(__dirname.replace('/controllers', '/lib/script'));
var versionObj = require(__dirname.replace('/controllers', `/lib/${version.dinamic}`));
const Verse = require('../models/Verse');

module.exports = {
    async store(request, response) {
        /**
         *  @var {book, chapter, text} report
         *  @var genReport [report_1, report_2, ...report_n]
        */
        var report = {};
        var genReport = [];

        // Searches versionObj by 1st loop
        for (let i = 0; i < versionObj.length; i++) {
            // Get the book name
            report['book'] = versionObj[i].name;

            // Searches the current book chapter by 2nd loop
            for (let j in versionObj[i].chapters) {
                // Get current chapter
                report['chapter'] = (parseInt(j) + 1);

                // Searches the current chapter verse by 3rd loop
                for (let l in versionObj[i].chapters[j]) {
                    // Get current verse from current chapter
                    report['text'] = versionObj[i].chapters[j][l];
                    
                    // Set current tableName to Model. It'll be some like 'bookAbbrev_chapterNum'
                    Verse.tableName = `${versionObj[i].abbrev}_${(parseInt(j) + 1)}`;
                    
                    // Calls Model to insert into database
                    const vs = await Verse.create(report);

                    // Pushing to general report
                    genReport.push({book:report['book'], chapter:report['chapter'],text:report['text']});
                }
            }
        }
        console.log(`Filling database ${version.dinamic} right now\n`);
        return response.json(genReport);
    }
}