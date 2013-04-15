var mongoose = require('../lib/mongoose.js');

var transactionSchema = new mongoose.Schema({
	business : {type: mongoose.Schema.Types.ObjectId, ref: 'Business'},
	customer : {type : mongoose.Schema.Types.ObjectId, ref: 'Customer'},
	date : { type : Date, default: Date.now },
	shippingoptions : [{type: mongoose.Schema.Types.ObjectId, ref : 'ShippingOption'}],
	paymentoptions : [{type: mongoose.Schema.Types.ObjectId, ref : 'PaymentOption'}],
	attributes : [{type: mongoose.Schema.Types.ObjectId, ref : 'Attribute'}],
	paymentmethod : {type: mongoose.Schema.Types.ObjectId, ref : 'PaymentMethod'}
	shippingaddress : {type: mongoose.Schema.Types.ObjectId, ref : 'ShippingAddress'},
	products : [{type: mongoose.Schema.Types.ObjectId, ref : 'Product'}],
	catalog : {type : mongoose.Schema.Types.ObjectId, ref : 'Catalog'},	
	snapshot : String
});

module.exports.schema = transactionSchema;
module.exports.model = mongoose.model('Transaction', transactionSchema);