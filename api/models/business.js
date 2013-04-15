var mongoose = require('../lib/mongoose.js');

var businessSchema = new mongoose.Schema({
	name: String,
	domain : String
});

module.exports.schema = businessSchema;
module.exports.model = mongoose.model('Business', businessSchema);