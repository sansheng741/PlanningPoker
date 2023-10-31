const express = require('express')
const { Server } = require('socket.io');


const app = express();
const io = new Server({
  cors: {
    origin: "http://localhost:8000"
  }
});
io.listen(3000);


app.use(express.static(__dirname + '/dist'))


app.get('*', (req, res) => {
    res.end('404 Not Found')
})

let users = [];
let rooms = []

const findUser = (id) => {
  return users.find(item => item.userId === id);
}

io.on('connection', (socket) => {
  socket.on('disconnect', (username) => {
    let user = users.find(item => item.userId === socket.id)
    if (user) {
      console.log(user.username, socket.id, '登出了');
      users = users.filter(item => item.userId !== socket.id)
    }
  })

  socket.on('login', (username, callback) => {
    let isExists = users.some(item => item.username === username);
    if (!isExists) {
      console.log(username, socket.id, '登录了')
      users.push({username, userId: socket.id})
    }
    console.log(rooms)
    callback({isExists, rooms})
  })

  socket.on('createRoom', (roomName, callback) => {
    console.log(socket.id, '创建了房间', roomName)
    let creator = findUser(socket.id)
    rooms.push({title: roomName, creator})
    callback({rooms})
  })
});





