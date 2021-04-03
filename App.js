/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import Routes from './src/components/Routes';

export default class App extends React.Component {
  state = {
    stateValue: 'This is my first time in react native',
  };
  updateState = () => {
    this.setState({
      stateValue: 'Update update update',
    });
  };
  render() {
    return <Routes />;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // // alignItems: 'center',
    // justifyContent: 'center',
    // // height: 600,
    // backgroundColor: 'gray',
  },
});
AppRegistry.registerComponent('App', () => App);
