var mongoose = require('../lib/mongoose.js'),
	Product = require('./product.js'),
	ShippingOption = require('./shippingoption.js'),
	PaymentOption = require('./paymentoption.js');

var catalogSchema = mongoose.Schema({
	businessid : mongoose.Schema.Types.ObjectId,
	name : String,
	products : [mongoose.Schema.Types.ObjectId],
	shippingOptions : [mongoose.Schema.Types.ObjectId],
	paymentOptions : [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Catalog', catalogSchema);