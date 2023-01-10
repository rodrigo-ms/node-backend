
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;




mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log("La conexión se ha relizado correctamente!!");

        //crear el servidor para escuchar peticiones http
        app.listen(port,()=>{
            console.log('servidor corriendo en http://localhost:'+port);
        })

});