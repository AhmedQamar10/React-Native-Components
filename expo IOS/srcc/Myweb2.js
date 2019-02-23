import React, { Component } from 'react';
import {TouchableOpacity,Text,NetInfo } from 'react-native';

export default class Myweb2 extends Component {
   
state={isConnected:null};
  handleOpening=()=>
  {
      if(this.state.isConnected===false)
      {
          alert('Sorry!! ,there is no internet connection');
          return;
      }
      if(this.state.isConnected===true)
      {
          this.props.navigation.navigate('Details');
      }
  }
componentDidMount()
{
    NetInfo.isConnected.addEventListener('connectionChange',this.handleChange);
    NetInfo.isConnected.fetch().done((isConnected)=>{this.setState({isConnected})})
}
componentWillMount()
{
    NetInfo.isConnected.removeEventListener('connectionChange',this.handleChange);
}
handleChange=(isConnected)=>
{
this.setState({isConnected})
}
  render() {
    return (
      
          <TouchableOpacity style={{flex:1,justifyContent:'center',
          alignItems:'center'}} onPress={()=>{this.handleOpening()}}>
          <Text style={{backgroundColor:'green',padding:30,fontSize:30,
          color:'white',fontWeight:'bold',borderRadius:34}}>Go to Website</Text>
          </TouchableOpacity>
      
    );
  }
}
