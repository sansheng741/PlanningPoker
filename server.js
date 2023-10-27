const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');


const app = express();
const server = createServer(app);
const io = new Server({
  cors: {
    origin: "http://localhost:8000"
  }
});
io.listen(3000);

// server.listen(port, () => {
//     console.log(`服务启动。。。,端口:${port}`)
// })

app.use(express.static(__dirname + '/dist'))


app.get('*', (req, res) => {
    res.end('404 Not Found')
})


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});





