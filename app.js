'use strict'

//cargar modulos de node para crear el servidor

var express = require('express');
var bodyParser = require('body-parser');

//ejecutar express (http)

var app = express();

// cargar ficheros rutas
var article_routes=require('./routes/article');

//middLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//añadir prefijos a rutas

app.use('/api',article_routes);


//exportar el modulo (fichero actual)
module.exports=app;


