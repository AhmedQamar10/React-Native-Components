
import React, { Component } from 'react';
import { View,Text,
    TouchableHighlight,
    } from 'react-native';
export default class Highlight extends Component {
    _onPressButton = () => {
        alert("You pressed the button !");
    }
    render() {
        return(<View style={ {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            } }>
                            <TouchableHighlight 
                                onPress={this._onPressButton}
                                underlayColor='red'
                                onShowUnderlay={()=>{
                                    alert("onShowUnderlay button !");
                                }}
                                >
                                <View style={{backgroundColor: 'green',borderRadius:55}}>
                                    <Text style={{
                                        color: 'white',
                                        padding: 20,
                                        fontSize: 28,
                                        fontWeight:'bold'
                                    }}>
                                        TouchableHighlight
                                    </Text>
                                </View>
                            </TouchableHighlight>
                           
                           
                        </View>);
    }
}