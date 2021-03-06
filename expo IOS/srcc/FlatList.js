import React, { Component } from "react";
import {View,Text,StyleSheet, TouchableHighlight
} from "react-native";

import HeaderComponent from "./HeaderComponent";
import FlatList1 from './FlatList1';
import FlatList2 from './FlatList2';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo'

export default class FlatList extends Component {
  
  render() {
    return (<View style={{ flex: 1, flexDirection: 'column' }}>
      <HeaderComponent {...this.props}/>
      <Tab2 />
    </View>

    )
  }
}
const Tab2 = TabNavigator(
  {
    Output: 
    {
      screen:FlatList1,
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
      screen:FlatList2,
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