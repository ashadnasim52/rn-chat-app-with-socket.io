import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

export class JoinScreen extends Component {
  render() {
    const {joinChat, setUserName} = this.props;
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding"
        enabled>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/11/30/18/14/chat-1873536_960_720.png',
            }}
            style={{width: 400, height: 300, resizeMode: 'contain'}}
          />
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              marginTop: 3,
              textTransform: 'uppercase',
            }}>
            Please Join To continue
          </Text>

          <View
            style={{
              // flex: 1,
              width: '100%',
              marginTop: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                fontSize: 25,
                padding: 3,
                borderBottomWidth: 2,
                width: '80%',
                borderColor: 'red',
                textAlign: 'center',
                marginVertical: 15,
              }}
              onChangeText={text => {
                setUserName(text);
              }}
              placeholder="your name"
            />
            <Button
              style={{
                fontSize: 30,
              }}
              onPress={() => {
                joinChat();
              }}
              title="join"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default JoinScreen;
