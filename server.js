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


io.on('connection', (socket) => {
  socket.on('logout', (username) => {
    console.log(username, '登出了');
    users = users.filter(user => user !== username)
  });

  socket.on('login', (username, callback) => {
    let isExists = users.some(item => item === username);
    console.log(users,username,isExists)
    callback({isExists})
    if (!isExists) {
      console.log(username, '登录了')
      users.push(username)
    }
  })
});





