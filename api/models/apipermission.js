var mongoose = require('../lib/mongoose.js');

var apiPermissionSchema = mongoose.Schema({
	businessid : mongoose.Schema.Types.ObjectId,
	permission : String
});

module.exports = mongoose.model('ApiPermission', apiPermissionSchema);