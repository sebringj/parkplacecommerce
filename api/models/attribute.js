var mongoose = require('../lib/mongoose.js');

var attributeSchema = new mongoose.Schema({
	name : String,
	value : String,
});

module.exports.schema = attributeSchema;
module.exports.model = mongoose.model('Attribute', attributeSchema);