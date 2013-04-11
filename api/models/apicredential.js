var mongoose = require('../lib/mongoose.js');

var apiCredentialSchema = mongoose.Schema({
	name: String,
	publicKey : String,
	privateKey : String,
	approved : Boolean,
	apipermissions : [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('ApiCredential', apiCredentialSchema);