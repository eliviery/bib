/**
 *	@description This project is based and developed referring to Meadowlark project by Ethan Brown at Web Development with Node and Express
 *	@constant express seting up Express Server Module
 *	@constant app seting up Express Server Module Engine
 *	@constant script seting up static temporary module
 *	@constant bibleTranslation Bible Translation work on
 *	@constant routes Importing Router module
*/

const express = require('express');
const app = express();
const routes = require('./routes');

/**
 *	@const handlebars seting up HandleBars View Engine
 *	@author Eric Ferraiuolo's
*/
const handlebars = require('express3-handlebars').create({defaultLayout: __dirname + '/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(routes);

app.use(express.json());
 
app.listen(app.get('port'), function(){
	console.log(__dirname);//'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to Exit.');
});
