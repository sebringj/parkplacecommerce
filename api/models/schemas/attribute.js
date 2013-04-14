var mongoose = require('../../lib/mongoose.js');

var attributeSchema = new mongoose.Schema({
	name : String,
	value : String,
});

module.exports = attributeSchema;