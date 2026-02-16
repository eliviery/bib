/**
 *  @description This project is based and developed referring to Meadowlark project by Ethan Brown at Web Development with Node and Express
 *  @constant express seting up Express Server Module
 *  @constant routes seting up Express Route Module Engine
 *  @constant BookController seting up Controller Module
 *  @constant script seting up static temporary module
*/
	
const express = require('express');
const routes = express.Router();
const BookController = require('./controllers/BookController');
const script = require('./lib/script');

routes.use(express.json());
routes.use(express.static('src/public'));
// Shows a JSON result
routes.get('/', function(request, response){
	return response.json({ hello:'Bible Project'})
});
// Post method inserting data
routes.post('/insert', BookController.store);
// Get method listing data
routes.get('/list', BookController.index);
// Put method updating data
routes.put('/update', BookController.change);
// Shows Home page
routes.get('/home', function(request, response){
	response.render(__dirname + '/views/home');
});
// Shows About page
routes.get('/about', function(request, response){
	response.render(__dirname + '/views/about');
 });
// Shows static web page
routes.get('/model', function(request, response){
	response.render(__dirname + '/views/model', { script });
});
// 404 catch-all handler (middleware)
routes.use(function(request, response, next){
	response.status(404);
	response.render(__dirname + '/views/404');
});
// 500 error handler (middleware)
routes.use(function(err, request, response, next){
	response.status(500);
	response.render(__dirname + '/views/500');
});

module.exports = routes;