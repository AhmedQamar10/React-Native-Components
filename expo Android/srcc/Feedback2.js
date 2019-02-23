import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator,ScrollView, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default class Feedback2 extends Component {
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
              source={{ uri: 'http://i68.tinypic.com/280muqr.png' }}
            />
            <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i64.tinypic.com/zugzdg.png'}}/>
    
         </ScrollView>
        )}
        </View>
    );
  }
}
