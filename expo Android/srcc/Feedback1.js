
import React, { Component } from 'react';
import {
    View, Text,
    TouchableNativeFeedback,
} from 'react-native';

export default class Feedback1 extends Component {
    _onPressButton = () => {
        alert("You pressed the button !");
    }
    render() {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <TouchableNativeFeedback
                onPress={this._onPressButton}
                useForeground={false}
            >
                <View style={{
                    width: 300,
                    backgroundColor: 'blue', borderRadius: 35
                }}>
                    <Text style={{
                        padding: 30,
                        fontSize: 20,
                        color: 'white', fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        TouchableNativeFeedback
                                    </Text>
                </View>
            </TouchableNativeFeedback>


        </View>);
    }
}