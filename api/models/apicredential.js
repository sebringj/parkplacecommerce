var mongoose = require('../lib/mongoose.js');

var apiCredentialSchema = mongoose.Schema({
	name: String,
	publicKey : String,
	privateKey : String,
	approved : Boolean,
	
	// contains a collection of ApiPermission 
	apipermissions : [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('ApiCredential', apiCredentialSchema);