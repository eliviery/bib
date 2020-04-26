/**
 * @description This project is based and developed referring to Meadowlark project by Ethan Brown at Web Development with Node and Express
 */

/** @constant express seting up Express Server */

 const express = require('express');
/** @constant app seting up Express Server Engine */
 const app = express();


/** @var handlebars seting up HandleBars View Engine
  * @author Eric Ferraiuolo's
*/


 app.set('port', process.env.PORT || 3000);

 //routes
 app.get('/', function(request, response){
     response.type('text/plain');
     response.send('Bible');
 });
 app.get('/about', function(request, response){
     response.type('text/plain');
     response.send('About Bible');
 });
 //Custom 404 page
 app.use(function(request, response, next){
     response.type('text/plain');
     response.status(404);
     response.send('404 - Not Found');
 });
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to Exit.');
});
