var mongoose = require('../lib/mongoose.js'),
	Product = require('./product.js'),
	ShippingOption = require('./shippingoption.js'),
	PaymentOption = require('./paymentoption.js');

var catalogSchema = mongoose.Schema({
	name : String,
	products : [Product],
	shippingOptions : [ShippingOption],
	paymentOptions : [PaymentOption]
});

module.exports = mongoose.model('Catalog',catalogSchema);