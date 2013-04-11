var mongoose = require('../lib/mongoose.js');

var shippingOptionSchema = mongoose.Schema({
	businessid : mongoose.Schema.Types.ObjectId,
	name: String,
	code : String,
	countries : [String]
});

module.exports = mongoose.model('ShippingOption', shippingOptionSchema);