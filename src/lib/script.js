const scripts = [
	'aa.js',
	'acf.js',
	'naa.js',
	'nbv_p.js',
	'ntlh.js',
	'nvi.js',
	'nvt.js',
	'tb.js',
	'construct.js',
	'matrixer.js',
	'geter.js'
];

module.exports = function () {
	var collection = '';
	for (let i in scripts) collection += `<script src='js/${scripts[i]}'></script>\n`;
	return collection;
}