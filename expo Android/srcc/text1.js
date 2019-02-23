import React,{Component} from 'react';
import { Text, View } from 'react-native';
export default class text1 extends Component {

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',
            alignItems:'center',flexDirection:'row',backgroundColor:'#2c3e50'}}>
            <View><Text style={{fontSize:30,fontStyle:'italic',color:'red',fontWeight:'bold'}}>
                Left
            </Text></View>
            <View style={{padding:30}}></View>
            <View><Text style={{fontSize:30,fontStyle:'italic',color:'yellow',fontWeight:'bold'}}>
                Center
            </Text></View>
            <View style={{padding:30}}></View>
           <View>
           <Text style={{fontSize:30,fontStyle:'italic',color:'green',fontWeight:'bold'}}>
                Right
            </Text>
           </View>
            </View>
        )
    }
}
            