var mongoose = require('../lib/mongoose.js').mongoose;

var shippingOptionSchema = mongoose.Schema({
	name: String,
	code : String,
	countries : [String]
});

exports = mongoose.model('ShippingOption', shippingOptionSchema);