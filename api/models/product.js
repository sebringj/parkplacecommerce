var mongoose = require('../lib/mongoose.js');

var productSchema = mongoose.Schema({
	businessid : mongoose.Schema.Types.ObjectId,
	name: String,
	wholesale : Number,
	msrp : Number,
	attributes : [mongoose.Schema.Types.Mixed],
	imageurls : [String],
	descriptions : [String],
	sku : String,
	upc : String
});

module.exports = mongoose.model('Product', productSchema);