var mongoose = require('../lib/mongoose.js').mongoose,
	Product = require('./product.js'),
	Shipping = require('./shipping.js'),
	Payment = require('./payment.js');

var catalogSchema = mongoose.Schema({
	name : String,
	products : [Product],
	shippingOptions : [Shipping],
	paymentOptions : [Payment]
});

exports = mongoose.model('Catalog',catalogSchema);