var mongoose = require('../lib/mongoose.js'),
	attributeSchema = require('./attribute.js').schema;

var paymentMethodSchema = new mongoose.Schema({
	label : String,
	attributes : [attributeSchema]
});

module.exports.schema = paymentMethodSchema;
module.exports.model = mongoose.model('PaymentMethod', paymentMethodSchema);