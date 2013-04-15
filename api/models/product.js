var mongoose = require('../lib/mongoose.js'),
	attributeSchema = require('./attribute.js').schema;

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

module.exports.schema = productSchema;
module.exports.model = mongoose.model('Product', productSchema);