/**
 * @constant scripts list fundamental module names
 */

//Indexes to       0	 1	   2       3     4     5    6      7     8	   9
const scripts = ['aa','arc','naa','nbv_p','nvi','nvt','tb','ntlh','kjv','a21','builder','refferences','metadata'];

module.exports = {
	'static':function () {
		var collection = '';
		for (let i in scripts)
			collection += `<script src='js/${scripts[i]}.js'></script>\n`;
			return collection;
		},
	'dinamic':scripts[ 5 ]
}