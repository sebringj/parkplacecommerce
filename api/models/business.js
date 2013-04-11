var mongoose = require('../lib/mongoose.js');

var businessSchema = mongoose.Schema({
	name: String,
	domain : String
});

module.exports = mongoose.model('Customer', customerSchema);