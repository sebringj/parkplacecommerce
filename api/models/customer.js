var mongoose = require('../lib/mongoose.js'),
	shippingAddressSchema = require('./schemas/shippingaddress.js');

var customerSchema = new mongoose.Schema({
	business : {type: mongoose.Schema.Types.ObjectId, ref : 'Business'},
	firstname: String,
	lastname: String,
	emailaddresses : [String],
	shippingaddresses : [shippingAddressSchema],
	paymentmethods : [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('Customer', customerSchema);