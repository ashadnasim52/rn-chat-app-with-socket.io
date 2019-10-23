const io = require('socket.io')();

const messageHandler = require('./handler/message');

let currentUserID = 2;
const users = {};

io.on('connection', socket => {
  console.log('user connected');
  users[socket.id] = {userId: currentUserID++};
  socket.on('join', userName => {
    console.log('joineddd...');

    users[socket.id].userName = userName;
    users[socket.id].avatar = `https://robohash.org/${userName}.png`;
    //it will only listen after join,
    console.log(users);
    messageHandler.onMessageRecieved(socket, users, userName);
  });

  socket.on('disconnect', () => {
    console.log('user left ' + users[socket.id].userName);
  });
});

io.listen(3002);
