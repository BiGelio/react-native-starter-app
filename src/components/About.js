import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {TouchableOpacity, Text} from 'react-native';

const About = () => {
  const goToHome = () => {
    Actions.home();
  };
  return (
    <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
      <Text>Welcome to about screen</Text>
    </TouchableOpacity>
  );
};
export default About;
