const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.post('/api/createRoom', function (req, res) {
  res.send('aaa');
});

app.post('/api/joinRoom', function (req, res) {
  res.send('bbb');
});

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log(message);
    io.sockets.emit('message', message);
  });
});

server.listen(3011, () => {
  console.log(`Listening on port 3011`);
});
