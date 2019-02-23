import React, { Component, TouchableNative } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

export default class Butto1 extends Component {

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
                <Button
                    title='BUTTON' />

                <Button
                    raised
                    icon={{ name: 'cached' }}
                    title='BUTTON WITH ICON' backgroundColor='red'/>

                <Button
                    large
                    rightIcon={{ name: 'code' }}
                    title='LARGE WITH RIGHT ICON' backgroundColor='green'/>

                <Button
                    large
                    icon={{ name: 'squirrel', type: 'octicon' }}
                    title='OCTICON' backgroundColor='blue'/>
            </View>
        );
    }
}