//remember any change made on here may not work on page
//until you restart the node js server from terminal:   node index


var express = require('express');
var socket = require('socket.io');  //server socket

//App  setup
var app = express();
<<<<<<< HEAD
var server = app.listen(80, function(){ //4000 for local machine
=======
var server = app.listen(80, function(){
>>>>>>> 629e1912a3a14a1f33f395a44f3615bfdf853dfc
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
