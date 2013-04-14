var apicredentials = require('./apicredential.js'),
	product = require('./product.js');
	
module.exports.setRoutes = function(app) {
	app.get('/', function(req, res){
		res.json('ok');
	});
	app.post('/',function(req, res) {
		var models = require('../models');
		models.ApiCredential.check(req.body, function(json) {
			res.json(json);
		});
	});
	app.post('/',function(req, res){
		console.log(req.body);
		res.json(req.body);
	});
	apicredentials.setRoutes(app);
	product.setRoutes(app);
};