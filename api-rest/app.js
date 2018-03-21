var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./routes/favorito');

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',api);

module.exports = app;

