import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class model1 extends Component {
    state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
              <Text style={{fontSize:40,fontWeight:'bold',color:'green',
    paddingBottom:35}}>Hello World!</Text>

              <TouchableHighlight
              style={{backgroundColor:'#3498db',alignSelf:'center',padding:15,borderRadius:25,width:270}}
        
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'white',
    alignSelf:'center'}}>Hide Modal</Text>
              </TouchableHighlight>
            
          </View>
        </Modal>
        <View><Text style={{fontSize:30,fontWeight:'bold',color:'blue',
    paddingBottom:35}}>Welcome React Native</Text>
        <TouchableHighlight
        style={{backgroundColor:'purple',alignSelf:'center',padding:15,borderRadius:25,width:270}}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{fontSize:30,fontWeight:'bold',color:'white',
    alignSelf:'center'}}>Show Modal</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}