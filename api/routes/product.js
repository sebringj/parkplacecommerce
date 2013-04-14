var views = require('../views');

module.exports.setRoutes = function(app) {
	app.get('/products', views.product.get);
	app.get('/products/:id', views.product.getById);
	app.post('/products', views.product.add);
	app.put('/products/:id', views.product.update);
	app.delete('/products/:id', views.product.delete);
};