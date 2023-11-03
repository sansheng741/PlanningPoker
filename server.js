const {Server} = require('socket.io');

// ================= prd ===============
const express = require('express')
const { createServer } = require('node:http');
const path = require('path');

const app = express();
const server = createServer(app);
const io = new Server(server)
server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
app.use(express.static(__dirname + '/dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

// ================= dev ===============
// const io = new Server({
//   cors: {
//     origin: "http://localhost:8000"
//   }
// });
// io.listen(3000);

let users = [];
let rooms = [];

const findUser = (id) => {
  return {...users.find(item => item.userId === id)};
}

const findRoom = (roomName) => {
  return rooms.find(item => item.roomName === roomName);
}

const findRoomByUserId = (userId) => {
  return rooms.find(item => item.members.findIndex(user => user.userId === userId) > -1)
}

const joinRoom = (roomName, user) => {
  let room = findRoom(roomName)
  if (user && room) {
    let userInRoom = findRoomByUserId(user.userId)
    if (userInRoom && room.roomName === userInRoom.roomName) return;
    room.members.push(user)
    room.members.forEach(user => user.vote = '')
    log(user.username, '加入了房间', roomName)
  }
}

const removeUser = (userId) => {
  users = users.filter(item => item.userId !== userId)
}

const log = (...data) => {
  console.log(new Date(), ...data);
}

const leaveRoom = (socket) => {
  let userId = socket.id
  let user = findUser(userId)
  let room = findRoomByUserId(userId)
  if (room && user) {
    room.members.splice(room.members.findIndex(user => user.userId === userId), 1)
    user.vote = ''
    log(user.username, '离开了房间', room.roomName)
    socket.to(room.roomName).emit(`notifyRoomMember`, {room});
  }
}

io.on('connection', (socket) => {
  socket.on('disconnect', (username) => {
    let user = users.find(item => item.userId === socket.id)
    if (user) {
      log(user.username, socket.id, '登出了');
      leaveRoom(socket)
      removeUser(socket.id)
    }
  })

  socket.on('login', (username, callback) => {
    let isExists = users.some(item => item.username === username);
    if (!isExists) {
      log(username, socket.id, '登录了')
      users.push({username, userId: socket.id})
    }
    callback({isExists, rooms})
  })

  socket.on('createRoom', (roomName, callback) => {
    let isExists = findRoom(roomName)
    if (!isExists) {
      log(socket.id, '创建了房间', roomName)
      let creator = findUser(socket.id)
      rooms.push({roomName, creator, members: []})
      io.emit('notifyRoomUpdate', {rooms})
    }
    callback({isExists})
  })

  socket.on('fetchRooms', (_, callback) => {
    callback({rooms})
  })

  socket.on('joinRoom', (roomName, callback) => {
    let room = findRoom(roomName);
    if (room) {
      socket.join(roomName)
      let user = findUser(socket.id)
      joinRoom(roomName, user)
      io.to(roomName).emit(`newMemberJoin`, {room});
    }
  })

  socket.on('leaveRoom', (roomName) => {
    socket.leave(roomName)
    leaveRoom(socket)
  })

  socket.on('vote', (point) => {
    let room = findRoomByUserId(socket.id)
    if (room) {
      room?.members?.forEach(user => {
        if (user.userId === socket.id) {
          user['vote'] = point
        }
      })
      io.to(room.roomName).emit(`notifyRoomMember`, {room});
    }
  })

  socket.on('clearVote', (roomName) => {
    let room = findRoom(roomName);
    room.members.forEach(user => user.vote = '')
    io.to(room.roomName).emit(`notifyRoomMember`, {room});
  })

  socket.on('story', (story) => {
    let room = findRoomByUserId(socket.id);
    socket.to(room.roomName).emit('story', {story})
  })
});



