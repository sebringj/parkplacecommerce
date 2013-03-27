var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	
app.get('/', function(){
	res.send('todo');
});

app.get('/help', function(req, res){
	res.send('todo');
});

app.listen(port);