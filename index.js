var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send({hello: 'World'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);