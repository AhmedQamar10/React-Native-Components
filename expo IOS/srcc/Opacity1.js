
import React, { Component } from 'react';
import {
    View, Text,
    TouchableOpacity,
} from 'react-native';
export default class Opacity1 extends Component {
    _onPressButton = () => {
        alert("You pressed the button !");
    }
    render() {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <TouchableOpacity
                onPress={this._onPressButton}
                activeOpacity={0.7}
            >
                <View style={{
                    width: 200,
                    backgroundColor: 'red', borderRadius: 30
                }}>
                    <Text style={{
                        padding: 15,
                        fontSize: 20, fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center'
                    }}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>

        </View>);
    }
}