import React, { Component } from 'react';

import { View, Text, Image, ScrollView } from 'react-native'
import { CheckBox, ListItem, Button } from 'react-native-elements'

export default class Check1 extends Component {
    constructor()
  {
    super()
    this.state={checked:false}
  }
    checkbox()
  {
    this.setState({checked:!this.state.checked}) 
    alert("Value is "+!this.state.checked)  
  }

  
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked} onPress={()=>this.checkbox()}
                />

                <CheckBox
                    center
                    title='Click Here'
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />
            </View>
        );
    }
}