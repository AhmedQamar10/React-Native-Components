import React, { Component } from "react";
import {View} from "react-native";
import HeaderComponent2 from './HeaderComponent2';
import Header1 from './Header1';
import Header2 from './Header2';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo'

export default class Header extends Component {
  
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
      screen:Header1,
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
      screen:Header2,
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