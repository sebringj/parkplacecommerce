var mongoose = require('../lib/mongoose.js').mongoose;

var paymentOptionSchema = mongoose.Schema({
	name: String,
	code : String,
	countries : [String]
});

exports = mongoose.model('PaymentOption',paymentOptionSchema);