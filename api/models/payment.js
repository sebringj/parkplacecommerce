var mongoose = require('../lib/mongoose.js').mongoose;

var paymentSchema = mongoose.Schema({
	name: String,
	code : String,
	countries : [String]
});

exports = mongoose.model('Payment',paymentSchema);