var fs = require('fs'),
	express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	fs.readfile(__dirname + '/public/index.html', 'utf-8', function(err, text) {
		res.send(text);
	});
});
app.listen(8080);

