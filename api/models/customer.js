var mongoose = require('../lib/mongoose.js'),
	shippingAddressSchema = require('./shippingaddress.js').schema;

var customerSchema = new mongoose.Schema({
	business : {type: mongoose.Schema.Types.ObjectId, ref : 'Business'},
	firstname: String,
	lastname: String,
	emailaddresses : [String],
	shippingaddresses : [shippingAddressSchema],
	paymentmethods : [mongoose.Schema.Types.Mixed]
});

module.exports.schema = customerSchema;
module.exports.model = mongoose.model('Customer', customerSchema);