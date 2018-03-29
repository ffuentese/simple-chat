var http = require(‘http’),
fs = require(‘fs’),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
index;
fs.readFile(‘./chat.html’, function (err, data) {
 if (err) {
    throw err;
 }
 index = data;
});
server.listen(process.env.PORT || 3000);
