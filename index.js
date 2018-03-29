var http = require(‘http’),
fs = require(‘fs’),
io = require(‘socket.io’),
index;
fs.readFile(‘./chat.html’, function (err, data) {
 if (err) {
    throw err;
 }
 index = data;
});
var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});

var socket = io.listen(server);
