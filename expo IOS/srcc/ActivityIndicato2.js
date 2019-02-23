import React, { Component } from "react";
import {
  View,
  Text,
  Image, ActivityIndicator,Dimensions
} from "react-native";
var { height, width } = Dimensions.get('window');
export default class ActivityIndicato2 extends Component {
  
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
      ) : 
        (
          <View>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i68.tinypic.com/2rh8b3o.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i67.tinypic.com/ftopox.png'}}/>
     </View>
      )}
      </View>
    )
  }
}