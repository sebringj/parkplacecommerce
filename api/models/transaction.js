var mongoose = require('../lib/mongoose.js'),
	shippingAddressSchema = require('./schemas/shippingaddress.js'),
	attributeSchema = require('./schemas/attribute.js');

var transactionSchema = new mongoose.Schema({
	business : {type: mongoose.Schema.Types.ObjectId, ref: 'Business'},
	customer : {type : mongoose.Schema.Types.ObjectId, ref: 'Customer'},
	date : { type : Date, default: Date.now },
	shippingoptions : [{type: mongoose.Schema.Types.ObjectId, ref : 'ShippingOption'}],
	paymentoptions : [{type: mongoose.Schema.Types.ObjectId, ref : 'PaymentOption'}],
	attributes : [attributeSchema],
	shippingaddress : shippingAddressSchema,
	products : [{type: mongoose.Schema.Types.ObjectId, ref : 'Product'}],
	catalog : {type : mongoose.Schema.Types.ObjectId, ref : 'Catalog'},	
	snapshot : String
});

module.exports = mongoose.model('Transaction', transactionSchema);