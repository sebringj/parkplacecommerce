var models = require('../models');
exports.getProducts = function(req, res) {
	models.Product.find(function(err, products) {
		res.end(products);
	});
};
exports.getSpecificProduct = function(req, res) {
	res.end('todo');
};
exports.addNewProduct = function(req, res) {
	res.end('todo');
};
exports.updateProduct = function(req, res) {
	res.end('todo');
};
exports.deleteProduct = function(req, res) {
	res.end('todo');
};