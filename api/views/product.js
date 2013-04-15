var Product = require('../models/product.js').model;
exports.get = function(req, res) {
	Product.find(function(err, products) {
		res.json(products);
	});
};
exports.getById = function(req, res) {
	Product.find({_id: req.params.id}, function(err, products) {
		res.json(products);
	});
};
exports.add = function(req, res) {
	var product = new Product(req.body);
	product.save(function(err, product){
		if (err) {
			res.json(err);
		} else {
			res.json(product);
		}
	});
};
exports.update = function(req, res) {
	var product = req.body;
	delete product._id;
	Product.update({_id : req.params.id}, product, function(err) {
		if (err) {
			res.json(err);
		} else {
			res.json({success: true});
		}
	});
};
exports.delete = function(req, res) {
	Product.remove({ _id: req.body.id }, function(err) {
	    if (!err) {
	    	res.json({success : false});
	    }
	    else {
	    	res.json({success : true});
	    }
	});
};