var product = require('./product.js');
module.exports.setRoutes = function(app) {
	app.get('/',function(req, res){
		res.send('ok');
	});
	product.setRoutes(app);
};