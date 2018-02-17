//remember any change made on here may not work on page
//until you restart the node js server from terminal:   node index


var express = require('express');
var socket = require('socket.io');  //server socket

//App  setup
var app = express();
var server = app.listen(80, function(){ //4000 for local machine
  console.log('listening port 4000');
});

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection...', socket.id);

//receive data from front User socket and send it to all users connected on Server socket
  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

  socket.on('typingMsg', function(data){
    socket.broadcast.emit('typingMsg', data);
  });
});
