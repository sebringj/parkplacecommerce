var mongoose = require('../lib/mongoose.js')

var apiUserSchema = mongoose.Schema({
	name: String,
	email : String,
	publicKey : String,
	privateKey : String,
	approved : Boolean,
	permissions : [String]
});

module.exports = mongoose.model('ApiUser', apiUserSchema);