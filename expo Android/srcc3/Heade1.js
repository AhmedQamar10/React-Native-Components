import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements'



export default class Heade1 extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        )
    }
}