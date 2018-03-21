'use strict'

var express = require ('express');
var favoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/list/',favoritoController.list);
api.get('/listOne/:stringValue',favoritoController.listOne);
api.get('/update/:id',favoritoController.update);
api.post('/saveFavorito',favoritoController.saveFavorito);


module.exports = api;