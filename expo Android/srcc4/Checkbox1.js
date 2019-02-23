import React, { Component } from 'react';
import { Checkbox } from 'react-native-paper';
import { View } from 'react-native';
export default class Checkbox1 extends Component {

    state = {
        checked: false,
    };

    render() {
        const { checked } = this.state;
        return (
            <View style={{ alignItems:'center',paddingTop:'50%' }}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'} color='purple'
                    onPress={() => { this.setState({ checked: !checked }); }}
                />
            </View>
        );
    }
}