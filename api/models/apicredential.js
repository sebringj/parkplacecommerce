var mongoose = require('../lib/mongoose.js');
	
var apiPermissionSchema = new mongoose.Schema({
	business: {type: mongoose.Schema.Types.ObjectId, ref : 'Business'},
	permissions : [String]
});

var apiCredentialSchema = new mongoose.Schema({
	name: String,
	publickey : String,
	privatekey : String,
	approved : Boolean,
	apipermissions : [apiPermissionSchema]
});

var ApiCredential = mongoose.model('ApiCredential', apiCredentialSchema);

apiCredentialSchema.statics.check = function(params, callback) {
	function validate(apiCredential, callback) {
		var crypto, hash;
		
		if(!apiCredential.approved) {
			callback({
				success : false,
				message : 'notapproved'
			});
		}		
		
		crypto = require('crypto');
		hash = crypto.createHmac('sha1', apiCredential.privatekey).update(JSON.stringify(params.jsonObj)).digest('hex');
		if (hash === params.signature) {
			callback({
				success : true,
				message : 'match',
				apiPermissions : apiCredential.apipermissions
			});
		} else {
			callback({
				success : false,
				message : 'nomatch'
			});		
		}
	}
	
	ApiCredential.findOne({'publickey' : params.publickey}, 'name privatekey approved apipermissions', function (err, apiCredential) {
		if (err) {
			callback({
				success : false,
				message : 'error',
				err : err
			});
		} else {
			validate(apiCredential, callback);
		}
	});
};

module.exports.schema = apiCredentialSchema;
module.exports.model = mongoose.model('ApiCredential', apiCredentialSchema);