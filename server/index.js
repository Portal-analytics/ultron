'use strict';

const server = require('http').createServer();
const io = require('socket.io')(server);

io.path('/translations/socket');

io.on('connection', function (client) {
    client.on('event', function (data) { console.log(data) });
    client.on('disconnect', function () { });
});

server.listen(3000);
