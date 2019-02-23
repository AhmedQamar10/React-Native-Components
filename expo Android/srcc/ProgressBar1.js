import React, { Component } from 'react';
import {
    ProgressBarAndroid,
    StyleSheet,
    View,Animated
  } from "react-native";
export default class ProgressBar1 extends Component {

    state={
        precent:0
    }
    anim=new Animated.Value(0);

    componentDidMount()
    {
        this.onAnimate();
    }
    onAnimate=()=>
    {
        this.anim.addListener(({value})=>
        {
            this.setState({precent:parseInt(value,10)});
        });
        Animated.timing(this.anim,
            {
                toValue:100,
                duration:3000
            }).start();
    }
    componentWillUnmount()
    {
        Animated.timing(this.anim,
            {
                duration:0
            }).start();
    }
    render() {
        return (
            <View style={{paddingTop:'10%'}}>
                <View style={styles.containe}>
                <Animated.View style={[styles.inner,{width:`${this.state.precent}%`}]}/>
            <Animated.Text style={styles.label}>
            {`${this.state.precent}%`}
            </Animated.Text>
            </View>
          <View style={{paddingTop:'20%'}}>
            <ProgressBarAndroid  />
            </View><View style={{paddingTop:'20%',padding:35}}>
            <ProgressBarAndroid styleAttr="Horizontal" />
            </View><View style={{paddingTop:'20%',padding:35}}>
            <ProgressBarAndroid styleAttr="Horizontal" color="red" />
            </View><View style={{paddingTop:'20%',padding:35}}>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.1} color="blue"
            />
          </View>
            </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 50,
        paddingTop:'10%',
        justifyContent:'space-between',
      },
      containe:
      {
          width:'70%',
          height:40,
          padding:3,
          borderColor:'#AAA',
          borderWidth:3,
          borderRadius:20,
          justifyContent:'center',
          alignSelf:'center'
      },
      inner:
      {
          width:'100%',
          height:30,
          borderRadius:15,
          backgroundColor:'#4834d4'
      },
      label:
      {
          fontSize:18,
          color:'black',
          position:'absolute',
          zIndex:1,
          alignSelf:'center',
      }
    });