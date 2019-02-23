import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';

export default class KeyboardAvoidingVie1 extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: 'center',justifyContent:'center' }}
        behavior="padding"
        enabled>
        <Text style={{ fontSize: 40, paddingTop: '5%',
          color: 'red' }}>Your Name</Text>
        <View style={{ borderColor: 'black', borderWidth: 1, }}>
        <TextInput style={{ padding: '5%',width:200}}
            placeholder="enter name"
            onChangeText={text => this.setState({ text })}
          />
        </View>
          
          <Text style={{ fontSize: 25, 
          color: 'green',paddingTop: '20%' }}>my big react</Text>
          <Text style={{ fontSize: 15, 
          color: 'blue',paddingTop: '15%' }}>No Detail!</Text>
      </KeyboardAvoidingView>
    );
  }
}
