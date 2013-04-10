var mongoose = require('../lib/mongoose.js');

var customerSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
	facebookid: String,
	twitterid: String,
	gmail: String,
	linkedinid: String,
	profileimageurl: String
});

module.exports = mongoose.model('Customer', customerSchema);