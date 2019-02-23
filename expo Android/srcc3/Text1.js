import React, { Component } from 'react';
import { Text } from 'react-native-elements'
import { View} from 'react-native'

export default class Text1 extends Component {

    state = {
        value: 10
    };

    render() {

        return (
            <View>
                <Text h1>Heading 1</Text>
                <Text h2>Heading 2</Text>
                <Text h3>Heading 3</Text>
                <Text h4>Heading 4</Text>
            </View>
        );
    }
}
