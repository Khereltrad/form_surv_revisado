const express = require("express");
const app = express();
const port = 8000;

app
.use( express.json() )
.use( express.urlencoded({ extended: true }) )
.use(express.static(__dirname+"/public"))
.use(require('./routes/routes'))   
.set('views', __dirname + '/views')
.set('view engine', 'ejs');


const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );

//! fin de server 1 . ahora comienzan los sockets
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
  
    socket.on('formulario_publicacion', function (data) {

        const numero = Math.floor(Math.random()*1000);
        socket.emit('mensaje_actualizado', data );
        socket.emit('numero_aleatorio', numero );

  });
    
});