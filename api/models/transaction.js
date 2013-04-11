var mongoose = require('../lib/mongoose.js');

var transactionSchema = mongoose.Schema({
	businessid : mongoose.Schema.Types.ObjectId,
	customerid : mongoose.Schema.Types.ObjectId,
	date : { type : Date, default: Date.now },
	shippingoption : [mongoose.Schema.Types.ObjectId],
	paymentoption : [mongoose.Schema.Types.ObjectId],
	
	// paymentdetail: differs from payment gateways greatly
	paymentdetail : mongoose.Schema.Types.Mixed,
	
	shippingaddress : mongoose.Schema.Types.Mixed,
	productids : [mongoose.Schema.Types.ObjectId],
	catalogid : mongoose.Schema.Types.ObjectId,
	
	// snapshot: copy of referenced data at time of transaction
	// so history of transaction can be exactly understood
	// such as actual product data, customer data, shipping etc, not IDs
	snapshot : {
		products : [mongoose.Schema.Types.Mixed],
		catalog : mongoose.Schema.Types.Mixed,
		customer: mongoose.Schema.Types.Mixed
	}
});

module.exports = mongoose.model('Transaction', transactionSchema);