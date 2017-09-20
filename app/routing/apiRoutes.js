var path = require('path');

var friends = require('../data/friends.js');

console.log("test");

module.exports = function(app) {
	console.log('___ENTER apiRoutes.js___');

	app.get('/api/friends', function(req, res) {
		res.json(friends);
		console.log("get");
	});

	app.post('/api/friends', function(req, res) {

		console.log("post");
		
	// 	var userInput = {"name" : "Ryan",
	// "photo" : "www.google.com",
	// "scores" : [2,3,2,4,2,5,3,2,4,2]};

		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		console.log('userResponses = ' + userResponses);

		var matchName = '';
		var matchImage = '';
		var totalDifference = 50;

		for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));

			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		friends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
	console.log("exit exports");
};