// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

// var path = require('path');

// module.exports = function(app) {
// 	app.get('/survey', function(req, res){
// 		res.sendFile(path.join(__dirname, '../public/survey.html'));
// 	})

// 	app.use(function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/home.html'));
// 	});
// }

// var path = require('path');


// module.exports = function(app){


// 	app.get('/survey', function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/survey.html'));
// 	});


// 	app.use(function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/home.html'));
// 	});

}