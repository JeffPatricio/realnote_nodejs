const server = require('./server');
const io = require('socket.io').listen(server);
var content = '';

io.on('connection', async (socket) => {

  socket.emit('old', content);

  socket.on('message', (evt) => {
    content = evt;
    socket.broadcast.emit('message', evt);
  });

});