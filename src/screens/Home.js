import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import JoinScreen from './JoinScreen';
import io from 'socket.io-client';
const socket = io('http://192.168.43.64:3002');
export class Home extends Component {
  state = {
    messages: [],
    hasJoin: false,
    userName: '',
  };
  componentDidMount() {
    socket.on('messageRecieved', this.onMessageRecieved);
  }

  onMessageRecieved = message => {
    console.log(message);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  };

  onSend = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    socket.emit('message', messages[0].text);
  };

  joinChat = () => {
    socket.emit('join', this.state.userName);
    this.setState({hasJoin: true});
  };
  setUserName = text => {
    this.setState({userName: text});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.hasJoin ? (
          <GiftedChat
            renderUsernameOnMessage
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
              name: 'ashad',
              avatar: 'https://robohash.org/YOUR-TEXT.png',
            }}
          />
        ) : (
          <JoinScreen joinChat={this.joinChat} setUserName={this.setUserName} />
        )}
      </View>
    );
  }
}

export default Home;
