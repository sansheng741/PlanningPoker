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

const findRoom = (roomName) => {
  return rooms.find(item => item.roomName === roomName);
}

const findRoomByUserId = (userId) => {
  return rooms.find(item=> item.members.findIndex(user => user.userId === userId) > -1)
}

const joinRoom = (roomName, user) => {
  rooms.forEach(item => {
    if(item.roomName === roomName){
      item.members.push(user)
    }
  })
  console.log(user.username, '加入了房间', roomName)
}

const removeUser = (userId) => {
  users = users.filter(item => item.userId !== userId)
}

const leaveRoom = (socket) => {
  let userId = socket.id
  let user = findUser(userId)
  let room = findRoomByUserId(userId)
  if (room) {
    rooms.forEach(item => {
      if (item.roomName === room.roomName) {
        item.members.splice(item.members.findIndex(user => user.userId === userId), 1)

      }
    })
    console.log(user.username, '离开了房间', room.roomName)
    socket.to(room.roomName).emit(`notifyRoomMember`, {user, room});
  }
}

io.on('connection', (socket) => {
  socket.on('disconnect', (username) => {
    let user = users.find(item => item.userId === socket.id)
    if (user) {
      console.log(user.username, socket.id, '登出了');
      leaveRoom(socket.id)
      removeUser(socket.id)
    }
  })

  socket.on('login', (username, callback) => {
    let isExists = users.some(item => item.username === username);
    if (!isExists) {
      console.log(username, socket.id, '登录了')
      users.push({username, userId: socket.id})
    }
    callback({isExists, rooms})
  })

  socket.on('createRoom', (roomName) => {
    console.log(socket.id, '创建了房间', roomName)
    let creator = findUser(socket.id)
    rooms.push({roomName, creator, members: []})
    io.emit('notifyRoomUpdate', {rooms})
  })

  socket.on('fetchRooms', (_, callback) => {
    callback({rooms})
  })

  socket.on('joinRoom', (roomName,callback) => {
    socket.join(roomName)
    let user = findUser(socket.id)
    joinRoom(roomName, user)
    let room = findRoom(roomName);
    callback({user, room})
    socket.to(roomName).emit(`notifyRoomMember`, {user, room});
  })

  socket.on('leaveRoom', (roomName) => {
    socket.leave(roomName)
    leaveRoom(socket)
  })
});





