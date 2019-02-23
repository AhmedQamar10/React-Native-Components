import React, { Component } from 'react';

import { View } from 'react-native'
import { Divider } from 'react-native-elements'

export default class Check1 extends Component {
  
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                <Divider style={{ backgroundColor: 'blue' }} />
            </View>
        );
    }
}