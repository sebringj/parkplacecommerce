var mongoose = require('../lib/mongoose.js');

var paymentOptionSchema = new mongoose.Schema({
	business : {type: mongoose.Schema.Types.ObjectId, ref : 'Business'},
	name: String,
	code : String,
	countries : [String]
});

module.exports = mongoose.model('PaymentOption', paymentOptionSchema);