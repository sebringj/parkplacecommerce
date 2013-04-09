var mongoose = require('../lib/mongoose.js');

var productSchema = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Product', productSchema);