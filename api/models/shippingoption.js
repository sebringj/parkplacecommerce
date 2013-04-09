var mongoose = require('../lib/mongoose.js');

var shippingOptionSchema = mongoose.Schema({
	name: String,
	code : String,
	countries : [String]
});

module.exports = mongoose.model('ShippingOption', shippingOptionSchema);