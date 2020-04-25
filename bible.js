/**
 * @description This project is based and developed referring to Meadowlark project by Ethan Brown at Web Development with Node and Express
 */

 var express = require('express');
 var app = express();
 app.set('port', process.env.PORT || 3000);

 //Custom 404 page
 app.use(function(request, response){
     response.type('text/plain');
     response.status(404);
     response.send('404 - Not Found');
 });
//Custom 500 page
 app.use(function(err, request, response, next){
     console.error(err.stack);
     response.type('text/plain');
     response.status(500);
     response.send('500 - Not Found');
 });
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to Exit.');
});
