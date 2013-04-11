var mongoose = require('../lib/mongoose.js');

var shippingAddressSchema = mongoose.Schema({
	name: String,
	street1 : String,
	street2 : String,
	city : String,
	state : String,
	country : String,
	postalcode : String,
	note: String
});

module.exports = mongoose.model('ShippingAddress', shippingAddressSchema);