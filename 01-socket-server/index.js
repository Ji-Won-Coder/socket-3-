//sevidror de express
const express = require('express');
const app = express();


//servidor de sockets
const server = require('http').createServer(app);

//configuracion de sockets server
const io = require('socket.io')(server);

//desplegar el directorio publico
app.use(express.static(__dirname + '/public') );

io.on('connection', (socket) => {

    //socket.emit('mensaje-bienvenida',{
    //    msg:'Bienvenido al server',
    //    fecha: new Date()
    //});

    //Escucha el evento
    socket.on('mensaje-del-server',(data) => {
        console.log(data);


        socket.emit('mensaje-del-server',data);
    });
   
   
});

server.listen(8080, () => {
    console.log('servicio corriendo en el puerto: 8080');
});