'use strict';
var http = require('http');
var io = require('socket.io')(http);

let server = http.createServer((req, res) => {
    req.on('data', (data) => {
        io.emit('change', data.toString());
    });  
    req.on('end', () => res.end());
});

io.on('connection', function (socket) {
    console.log('A client is connected:' + socket);
});

server.listen(5007, function(){
  console.log('listening on *:5007');
});

io.listen(5008, function(){
  console.log('listening on *:5008');
});