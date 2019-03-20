const express = require('express');
const path = require('path');
const http = require('http');
const httpProxy = require('http-proxy');
const socketio = require('socket.io');
const apiProxy = httpProxy.createProxyServer();
const { PROD_API_URL, PROD_CONTENT_URL } = require('../config/constants');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static('dist'));

app.all('/api/*', function (req, res) {
  apiProxy.web(req, res, { target: PROD_API_URL }, function (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  });
});

app.all('/resources/*', function (req, res) {
  apiProxy.web(req, res, { target: PROD_CONTENT_URL }, function (e) {
    console.error(e);
    res.status(500).send('Internal server error');
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve('./dist/index.html'));
});

io.on('connection', () => {

});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
