var mongoose = require('../lib/mongoose.js');

var businessSchema = new mongoose.Schema({
	name: String,
	domain : String
});

module.exports = mongoose.model('Business', businessSchema);