import React, { Component } from "react";
import {View} from "react-native";
import HeaderComponent2 from './HeaderComponent2';
import Toast1 from './Toast1';
import Toast2 from './Toast2';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo'

export default class Toast extends Component {
  
  render() {
    return (<View style={{ flex: 1, flexDirection: 'column' }}>
      <HeaderComponent2 {...this.props}/>
      <Tab/>
    </View>
    )
  }
}

const Tab = TabNavigator(
  {
    Output: 
    {
      screen:Toast1,
      navigationOptions:
      {
        tabBarLabel:'Output',
        tabBarIcon:({tintColor})=>(
          <Icon name="log-out" size={22} 
          color={tintColor}
        />
        )
      }
    },
    Code: 
    {
      screen:Toast2,
      navigationOptions:
      {
        tabBarLabel:'Code',
        tabBarIcon:({tintColor})=>(
          <Icon name="code" size={22} 
          color={tintColor}
        />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    initialRouteName:'Output',
    tabBarOptions:
    {
      activeTintColor:'black',
      activeBackgroundColor:'#1e90ff',
      inactiveTintColor:'white',
      inactiveBackgroundColor:'#a4b0be',
      labelStyle:
      {
        fontSize:16,
        fontWeight:'bold'
      }
    }
  }
)