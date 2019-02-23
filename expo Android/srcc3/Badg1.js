import React, { Component, TouchableNative } from 'react';
import { View, Text } from 'react-native';
import { Badge } from 'react-native-elements'

export default class Badg1 extends Component {

    render() {

        return (
            <View style={{ flex: 1,alignItems:'center',padding:10 }}>
                <Badge
                    value={3}
                    textStyle={{ color: 'orange' }}
                />

                <Badge containerStyle={{ backgroundColor: 'violet' }}>
                    <Text>User 1</Text>
                </Badge>

                <Badge onPress={() => { console.log('pressed') }} value="5" />

                <Badge component={TouchableNative} value={10} />
            </View>
        );
    }
}