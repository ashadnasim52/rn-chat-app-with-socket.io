let messageId = 2;

const generateMessage = (user, text) => {
  return {
    _id: messageId++,
    text: text,
    createdAt: new Date(),
    user: {
      _id: user.userId,
      name: user.userName,
      avatar: user.avatar,
    },
  };
};

exports.onMessageRecieved = (socket, users, userName) => {
  socket.on('message', messageText => {
    console.log(`messageText recieved is ${messageText} from ${userName}`);
    const user = users[socket.id];
    const messageObj = generateMessage(user, messageText);
    // To send to  person but exclude the sender
    // socket.broadcast.emit('messageRecieved', messageText);
    socket.emit('messageRecieved', messageObj);
  });
};
