var express = require('express'),
	app = express(),
	http = require('http'),
	routes = require('./routes');
	
app.configure(function () {
	app.set('port', process.env.PPC_API_PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
});

routes.setRoutes(app); 

app.listen(app.get('port'));