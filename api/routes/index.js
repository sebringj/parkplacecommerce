var product = require('./product.js');
module.exports.setRoutes = function(app) {
	app.get('/',function(req, res){
		res.end(req.body);
	});
	app.post('/',function(req, res){
		console.log(req.body);
		res.json(req.body);
	});
	product.setRoutes(app);
};