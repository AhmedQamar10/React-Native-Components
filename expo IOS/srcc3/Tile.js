import React, { Component } from "react";
import {View} from "react-native";
import HeaderComponent3 from './HeaderComponent3';
import Tile1 from './Tile1';
import Tile2 from './Tile2';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo'

export default class Tile extends Component {
  
  render() {
    return (<View style={{ flex: 1, flexDirection: 'column' }}>
      <HeaderComponent3 {...this.props}/>
      <Tab/>
    </View>
    )
  }
}

const Tab = TabNavigator(
  {
    Output: 
    {
      screen:Tile1,
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
      screen:Tile2,
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