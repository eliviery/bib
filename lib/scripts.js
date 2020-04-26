var list = [
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

exports.getCollection = function () {
	var collection = '';
	for (let i in list) collection += '<script src="js/' + list[i] + '"></script>\n';
	return collection;
}