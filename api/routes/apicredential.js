var views = require('../views');

module.exports.setRoutes = function(app) {
	app.get('/apicredentials', views.apicredential.get);
	//app.get('/apicredentials/:id', views.apicredential.getById);
	app.post('/apicredentials', views.apicredential.add);
	app.put('/apicredentials/:id', views.apicredential.update);
	//app.delete('/apicredentials/:id', views.apicredential.delete);
};