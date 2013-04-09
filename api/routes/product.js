var views = require('../views');

module.exports.setRoutes = function(app) {
	app.get('/products', views.product.getProducts);
	app.get('/products/:id', views.product.getSpecificProduct);
	app.post('/products', views.product.addNewProduct);
	app.put('/products/:id', views.product.updateProduct);
	app.delete('/products/:id', views.product.deleteProduct);
};