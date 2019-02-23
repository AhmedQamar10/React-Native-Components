import React, { Component } from 'react';
import { UIManager } from 'react-native';
import {StackNavigator} from 'react-navigation';
import First from './React Native Components/First';
import Second from './React Native Components/Second';
import Third from './React Native Components/Third';
import Four from './React Native Components/Four';
import Five from './React Native Components/Five';
import Six from './React Native Components/Six';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends Component {
  
  render() {
    
    return (
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = StackNavigator(
  {
    first:
    {
      screen:First,
      navigationOptions:
      {
        header:null
      }
    },
    second:
    {
      screen:Second,
      navigationOptions:
      {
        header:null
      }
    },
    third:
    {
      screen:Third,
      navigationOptions:
      {
        header:null
      }
    },
    four:
    {
      screen:Four,
      navigationOptions:
      {
        header:null
      }
    },
    five:
    {
      screen:Five,
      navigationOptions:
      {
        header:null
      }
    },
    six:
    {
      screen:Six,
      navigationOptions:
      {
        header:null
      }
    },
  },
  {
    initialRouteName: 'first',
  }
)
