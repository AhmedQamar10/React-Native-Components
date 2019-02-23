import React, { Component } from 'react';
import {View,Text,InputAccessoryView,TextInput,Button } from 'react-native';

export default class InputAccessoryView1 extends Component {
  
constructor(props) {
    super(props);
    this.state = {text: 'enter name'};
  }

  render() {
    const inputAccessoryViewID = 'inputAccessoryView1';
    return (
      <View style={{flexDirection:'row',padding:30}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Your Name: </Text>
        <TextInput
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View style={{backgroundColor: 'pink'}}>
            <Button
              onPress={() => this.setState({text: ''})}
              title="Reset Text"
            />
          </View>
        </InputAccessoryView>
      </View>
    );
  }
} 