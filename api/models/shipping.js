var mongoose = require('../lib/mongoose.js').mongoose;

var shippingSchema = mongoose.Schema({
	name: String,
	code : String,
	countries : [String]
});

exports = mongoose.model('Shipping',shippingSchema);