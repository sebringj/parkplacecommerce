var mongoose = require('mongoose');
mongoose.connect(process.env.PPC_API_MONGODB_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('db open');
});

exports.mongoose = mongoose;