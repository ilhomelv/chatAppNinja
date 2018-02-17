//make connection
//var socket is not same variable as one in index.js
//var socket = io.connect('http://localhost:4000'); //user socket
var socket = io.connect('http://chat.uzkino.com:80'); //user socket

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    typing = document.getElementById('typing');


//emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function(){
  socket.emit('typingMsg', handle.value);
})


//listen events
socket.on('chat', function(data){
    typing.innerHTML = ""; //clears: is typing a message...
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typingMsg', function(data){
  typing.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
