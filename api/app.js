var express = require('express'),
	app = express(),
	port = process.env.PPC_API_PORT || 3000,
	routes = require('./routes');
	
app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
	app.use(express.favicon(__dirname + '/public/imgages/favicon.ico')); 
});

routes.setRoutes(app);
app.listen(port);