import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/Home';

export class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Home />
      </View>
    );
  }
}

export default App;
