import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import  Button from 'react-native-button';

export default class Button1 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button style={{fontSize:25,color:'white',backgroundColor:'red',padding:25,borderRadius:25,width:300}}
          onPress={() => {
            Alert.alert('You pressed the button red !');
          }}>Button</Button>
      <View style={{paddingTop:20}}></View>
      <Button style={{fontSize:25,color:'black',backgroundColor:'yellow',padding:25,borderRadius:25,width:300}}
          onPress={() => {
            Alert.alert('You pressed the button yellow !');
          }}>Button</Button>
      <View style={{paddingTop:20}}></View>
      <Button style={{fontSize:25,color:'white',backgroundColor:'green',padding:25,borderRadius:25,width:300}}
          onPress={() => {
            Alert.alert('You pressed the button green !');
          }}>Button</Button>
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
            color:'white',
            fontSize:30,
            fontWeight:'bold'
          }}
          onPress={() => {
            Alert.alert('You pressed the button !');
          }}>
          Button</Button>
*/
//import Button from 'react-native-button'
