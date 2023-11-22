var app = require('express')()

var http = require('http').Server(app)

var io = require('socket.io')(http)

var port = process.env.REACT_APP_SOCKET_PORT || 3001

app.get('/', function (request, response){
    response.send('Test İstek')
})

io.on("connection", (socket) => {
    console.log('bağlantı sağlandı')

    socket.on('send_data', (data) => {
        socket.broadcast.emit('push_data', {
            url: data.url,
        })
       /* socket.emit('welcome', {
            text: `Sitede bir link paylaşıldı: ${data.url}`,
        })*/
    })
});


http.listen(port, function () {
    console.log(`server is running: http://localhost:${port}`)
})