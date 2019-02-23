import React, { Component } from 'react';
import { View } from 'react-native';

export default class view1 extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'
                }}>
                <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </View>
            </View>
        );
    }
}