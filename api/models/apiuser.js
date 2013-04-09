var mongoose = require('../lib/mongoose.js').mongoose;

var apiUserSchema = mongoose.Schema({
	name: String,
	email : String,
	publicKey : String,
	privateKey : String,
	approved : Boolean,
	permissions : [String]
});

exports = mongoose.model('ApiUser', apiUserSchema);