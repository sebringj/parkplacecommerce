var mongoose = require('../lib/mongoose.js');

var paymentOptionSchema = mongoose.Schema({
	name: String,
	code : String,
	countries : [String]
});

module.exports = mongoose.model('PaymentOption', paymentOptionSchema);