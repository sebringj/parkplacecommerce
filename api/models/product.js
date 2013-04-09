var mongoose = require('../lib/mongoose.js').mongoose;

var productSchema = mongoose.Schema({
	name: String
});

exports = mongoose.model('Product',productSchema);