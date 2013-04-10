var models = require('../models');
exports.getProducts = function(req, res) {
	models.Product.find(function(err, products) {
		res.json(products);
	});
};
exports.getSpecificProduct = function(req, res) {
	models.Product.find({_id: req.params.id}, function(err, products) {
		res.json(products);
	});
};
exports.addNewProduct = function(req, res) {
	var product = new models.Product(req.body);
	product.save(function(err, product){
		if (err) {
			res.json(err);
		} else {
			res.json(product);
		}
	});
};
exports.updateProduct = function(req, res) {
	var product = req.body;
	delete product._id;
	models.Product.update({_id : req.params.id}, product, function(err) {
		if (err) {
			res.json(err);
		} else {
			res.json({success: true});
		}
	});
};
exports.deleteProduct = function(req, res) {
	models.Product.remove({ _id: req.body.id }, function(err) {
	    if (!err) {
	    	res.json({success : false});
	    }
	    else {
	    	res.json({success : true});
	    }
	});
};