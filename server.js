var app = require('express')();
var http = require('http').Server(app());
var io = require('socket.io')(http);
var port = process.env.REACT_APP_SOCKET_PORT;

app.get('/', function (req, res){
    res.send('Test İstek');
})