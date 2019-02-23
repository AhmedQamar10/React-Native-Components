
import React, { Component }
    from 'react';
import {
    View, Text,
    TouchableWithoutFeedback,
} from 'react-native';

export default class outFeedback1 extends Component {
    _onPressButton = () => {
        alert("You pressed the button !");
    }
    render() {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableWithoutFeedback
                // onPress={this._onPressButton}
                onLongPress={() => {
                    alert("onLongPress");
                }}
                // onPressIn={()=> {
                //     alert("onPressIn");
                // }}
                // onPressOut={()=> {
                //     alert("onPressOut");
                // }}
                disabled={false}
            >
                <View style={{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'purple', borderRadius: 35
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20, fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center'
                    }}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>);
    }
}