import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {TouchableOpacity, Text} from 'react-native';
import Home from './Home';

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  return (
    <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
      <Text>Welcome to home screen</Text>
    </TouchableOpacity>
  );
};
export default Home;
