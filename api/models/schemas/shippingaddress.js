var mongoose = require('../../lib/mongoose.js');

var shippingAddressSchema = new mongoose.Schema({
	label : String,
	address1 : String,
	address2 : String,
	city : String,
	state : String,
	country : String,
	postalcode : String
});

module.exports = shippingAddressSchema;