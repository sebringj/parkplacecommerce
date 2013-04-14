var mongoose = require('../lib/mongoose.js'),
	attributeSchema = require('./schemas/attribute.js');

var productSchema = new mongoose.Schema({
	business : {type: mongoose.Schema.Types.ObjectId, ref: 'Business'},
	name: String,
	wholesale : Number,
	msrp : Number,
	attributes : [attributeSchema],
	imageurls : [String],
	descriptions : [String],
	sku : String,
	upc : String
});

module.exports = mongoose.model('Product', productSchema);