import React, { Component } from 'react';
import { View,Text,Modal,Alert,TouchableHighlight,Button } from 'react-native';

export default class Picy1 extends Component {
constructor(props)
{
    super(props);

    this.state={
        pickerSelection:'color value',
        pickerDisplayed:false
    }
}

setPickerValue(newValue)
{
    this.setState({
        pickerSelection:newValue
    });
    this.togglePicker();
}
togglePicker()
{
    this.setState({
        pickerDisplayed:!this.state.pickerDisplayed
    })
}
    render() {
        const pickerValues=
        [
            {
                title:'Red',
                value:'red'
            },
            {
                title:'Green',
                value:'Green'
            },
            {
                title:'Purple',
                value:'purple'
            },
        ]
        return (
            <View style={{flex:1,
            justifyContent:'center',alignItems:'center'}}>
            <Text style={{paddingBottom:'10%',fontSize:20,fontWeight:'bold'}}>The Color Value is {this.state.pickerSelection}</Text>
            <Button onPress={()=>this.togglePicker()} title={"Select a value!"}></Button>
            
            <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}  
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
            <View style={{margin:20,padding:20,backgroundColor:'#95afc0',
            bottom:20,left:20,alignItems:'center',
            right:20,position:'absolute'}}>
            <Text style={{fontWeight:'bold',
        marginBottom:10,fontSize:20,color:'green'}}>Please pick a value</Text>
            {pickerValues.map((value,index)=>
            {
                return <TouchableHighlight key={index} onPress={()=>this.setPickerValue(value.value)} style={{
                    paddingTop:4,paddingBottom:4
                }}><Text style={{fontSize:20,fontWeight:'bold'}}>{value.title}</Text>
                </TouchableHighlight>
            })}
            <TouchableHighlight onPress={()=>this.togglePicker()} style={{
                paddingTop:4,paddingBottom:4
            }}><Text style={{color:'blue'}}>Canel</Text>
            </TouchableHighlight>
            </View>
            </Modal>
            </View>
        );
    }
}