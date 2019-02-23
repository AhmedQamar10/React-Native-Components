import React, { Component } from "react";
import {
  View,
  Text,
  Image, ActivityIndicator,Dimensions
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var { height, width } = Dimensions.get('window');
export default class List2 extends Component {
  
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
          <ScrollView>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i63.tinypic.com/28vstbc.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i65.tinypic.com/140b0ba.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i63.tinypic.com/282nfyo.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i63.tinypic.com/2uqcao4.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i68.tinypic.com/nletxs.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i65.tinypic.com/6s9ohd.png'}}/>
      <Image style={{width:width,height:height/1.92}} 
      source={{uri:'http://i63.tinypic.com/2hnusrr.png'}}/>
     </ScrollView>
      )}
      </View>
    )
  }
}