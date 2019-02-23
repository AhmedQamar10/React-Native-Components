import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'



export default class Ico1 extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Icon iconStyle={{fontSize:60}}
                    name='rowing' />

                <Icon iconStyle={{fontSize:60}}
                    name='g-translate'
                    color='#00aced' />

                <Icon iconStyle={{fontSize:60}}
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />

                <Icon
                    reverse iconStyle={{fontSize:60}}
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />

                <Icon
                    raised iconStyle={{fontSize:60}}
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} />
            </View>
        )
    }
}