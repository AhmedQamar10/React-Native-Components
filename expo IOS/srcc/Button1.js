import React, { Component } from 'react';
import { Button, View, Alert } from 'react-native';
export default class Button1 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={
          {
            backgroundColor:'red',
            padding:20,
            borderRadius:25,
            width:'40%',
            shadowOpacity:11
          }}>
          <Button
          onPress={() => {
            Alert.alert('You pressed the button red !');
          }} title="Button" color="white"></Button>
      </View>
      <View style={{paddingTop:20}}></View>
      <View style={
          {
            backgroundColor:'yellow',
            padding:20,
            borderRadius:25,
            width:'40%',
            shadowOpacity:11,            
          }}>
          <Button
          onPress={() => {
            Alert.alert('You pressed the button yellow !');
          }} title="Button" color="black"></Button>
      </View>
      <View style={{paddingTop:20}}></View>
      <View style={
          {
            backgroundColor:'green',
            padding:20,
            borderRadius:25,
            width:'40%',
            shadowOpacity:11,
            
          }}>
          <Button
          onPress={() => {
            Alert.alert('You pressed the button green !');
          }} title="Button" color="white"></Button>
      </View>
      </View>
    );
  }
}
/*
<Button style={
          {
            backgroundColor:'#5352ed',
            padding:20,
            borderRadius:25,
            width:'70%',
            shadowOffset:20,
            shadowOpacity:0.5,
            color:'white',
            fontSize:30,
            fontWidth:'bold'
          }}
          onPress={() => {
            Alert.alert('You pressed the button !');
          }}>
          Button</Button>
*/
//import Button from 'react-native-button'
