/**
 * @description This project is based and developed referring to Meadowlark project by Ethan Brown at Web Development with Node and Express
 */

/** @constant express seting up Express Server Module
  * @constant app seting up Express Server Module Engine */
 const express = require('express');
 const app = express();
 const scripts = require('./lib/scripts');

/** @var handlebars seting up HandleBars View Engine
  * @author Eric Ferraiuolo's
*/
 var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
 app.engine('handlebars', handlebars.engine);
 app.set('view engine', 'handlebars');

 app.set('port', process.env.PORT || 3000);

 app.use(express.static(__dirname + '/public'));

 //routes
 app.get('/', function(request, response){
     response.render('home', { scripts: scripts.getCollection() });
 });
 app.get('/about', function(request, response){
     response.render('about');
 });
 // 404 catch-all handler (middleware)
 app.use(function(request, response, next){
     response.status(404);
     response.render('404');
 });
 // 500 error handler (middleware)
 app.use(function(err, request, response, next){
     response.status(500);
     response.render('500');
 });
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to Exit.');
});
