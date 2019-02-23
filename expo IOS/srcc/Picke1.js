import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';

export default class Picke1 extends Component {

    constructor(props) {
        super(props);
        this.state = { pikerSelection: 'color value!' }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Color Value is {this.state.pikerSelection}</Text>
                <Picker style={{
                    backgroundColor: '#c7ecee',
                    position: 'absolute', bottom: 0, left: 0, right: 0
                }}
                    selectedValue={this.state.pikerSelection}
                    onValueChange={(itemValue) => this.setState({ pikerSelection: itemValue })}
                >
                    <Picker.Item label="Red" value="red" color="red" />
                    <Picker.Item label="Blue" value="blue" color="blue" />
                    <Picker.Item label="Purple" value="purple" color="purple" />
                </Picker>
            </View>
        );
    }
}