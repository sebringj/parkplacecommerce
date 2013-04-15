var mongoose = require('../lib/mongoose.js');

var catalogSchema = new mongoose.Schema({
	business : {type : mongoose.Schema.Types.ObjectId, ref : 'Business'},
	name : String,
	products : [{type : mongoose.Schema.Types.ObjectId, ref : 'Product'}],
	shippingOptions : [{type: mongoose.Schema.Types.ObjectId, ref : 'ShippingOption'}],
	paymentOptions : [{type: mongoose.Schema.Types.ObjectId, ref : 'PaymentOption'}]
});

module.exports.schema = catalogSchema;
module.exports.model = mongoose.model('Catalog', catalogSchema);