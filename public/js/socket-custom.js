
var socket = io()

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

// Escuchar información
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Vicente',
    mensaje: 'Hola Mundo'
}, function( resp ) {
    console.log('respuesta server ', resp);
});

// Escuchar Informacion
socket.on('enviarMensaje' , function (mensaje) {
    console.log(mensaje);
});