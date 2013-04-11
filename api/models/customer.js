var mongoose = require('../lib/mongoose.js');

var customerSchema = mongoose.Schema({
	businessid : mongoose.Schema.Types.ObjectId,
	firstname: String,
	lastname: String,
	emailaddresses : [String],
	shippingaddresses : [mongoose.Schema.Types.Mixed],
	paymentmethods : [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('Customer', customerSchema);