var ApiCredential = require('../models/apicredential.js').model;
exports.get = function(req, res) {
	ApiCredential.find(function(err, apicredentials) {
		res.json(apicredentials);
	});
};
exports.add = function(req, res) {
	var apicredential = new ApiCredential(req.body);
	apicredential.save(function(err, apicredential) {
		if (err) {
			res.json({
				success : false,
				message : 'error',
				err : err
			});
		} else {
			res.json({
				success : true,
				message : 'added',
				apicredential : this
			});
		}
	});
};
exports.update = function(req, res) {
	var apicredential = req.body;
	delete apicredential._id;
	ApiCredential.update({_id : req.params.id}, apicredential, function(err) {
		if (err) {
			res.json({
				success : false,
				message : 'error',
				err : err
			});
		} else {
			res.json({
				success: true,
				message: 'updated',
				apicredential : apicredential
			});
		}
	});
};