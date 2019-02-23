import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator,ScrollView, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default class SegmentedControl2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 5000);
  }
  render() {
    return (
      <View>
        {this.state.show ? (
          <View style={{alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator
          style={{paddingTop: '50%'}}
            size="large"
            color="#0000ff"
          />
          <Text style={{color:'black',paddingTop: '40%'}}>
          Please Wait ...</Text>
          </View>
        ) : (
          <ScrollView>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/2z7fvnk.png' }}
            />
            <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i63.tinypic.com/34zgcas.png'}}/>
      <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/j9c9sl.png' }}
            />
            <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i64.tinypic.com/2465myo.png'}}/>
      <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/2u5e0dk.png' }}
            />
            <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i67.tinypic.com/25jz2tc.png'}}/>
      <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i65.tinypic.com/ebdc1g.png' }}
            />
            
         </ScrollView>
        )}
        </View>
    );
  }
}
