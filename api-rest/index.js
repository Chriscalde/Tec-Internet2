'use strict'

var app = require('./app');
const mongoose = require('mongoose');

var port = process.env.port || 3000;

mongoose.connect('mongodb://localhost:27017/api-rest', (err,res) => {
    if(err){
        throw err;
    }else{
        console.log("Conexion a mongo exitosa");
app.listen(port, function () {
    console.log(`API REST FUNCIONANDO en ${port}`);
        });
    }
});