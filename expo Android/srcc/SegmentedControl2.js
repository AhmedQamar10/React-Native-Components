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
    this.timer=setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 5000);
  }
  componentWillUnmount()
  {
    clearTimeout(this.timer)
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
      source={{uri:'http://i68.tinypic.com/eja5xu.png'}}/>
      <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i66.tinypic.com/dmfuza.png' }}
            />
            <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i65.tinypic.com/2100jg6.png'}}/>
      <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/2hgs6s8.png' }}
            />
            <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i64.tinypic.com/1603hqr.png'}}/>
      <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/2j3ig5c.png' }}
            />
            
         </ScrollView>
        )}
        </View>
    );
  }
}
