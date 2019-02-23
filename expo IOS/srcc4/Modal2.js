import React, { Component } from "react";
import {
  View,
  Text,
  Image, ActivityIndicator,Dimensions
} from "react-native";
var { height, width } = Dimensions.get('window');
export default class Modal2 extends Component {
  
 constructor(props) { 
    super(props);
    this.state = {
      show: true,
    };
  } 
  componentDidMount() {
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
      ) : 
        (
          <View>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i63.tinypic.com/91cd2c.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i67.tinypic.com/ftopox.png'}}/>
     </View>
      )}
      </View>
    )
  }
}