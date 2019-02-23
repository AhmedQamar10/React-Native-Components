import React, { Component } from 'react';
import { Tile, Text } from 'react-native-elements'
import { View, ScrollView } from 'react-native'

export default class Tile1 extends Component {

    state = {
        value: 10
    };

    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Text style={{ fontSize: 30, alignSelf: 'center',backgroundColor:'green' }}>Featured Tile</Text>
                    <Tile
                        imageSrc={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                        featured
                        caption="Some Caption Text"
                    />
                    <Text style={{ fontSize: 30, alignSelf: 'center',backgroundColor:'green' }}>Featured Tile with Icon</Text>
                    <Tile
                        imageSrc={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                        icon={{ name: 'play-circle', type: 'font-awesome' }}
                        featured
                    />
                    <Text style={{ fontSize: 30, alignSelf: 'center',backgroundColor:'green' }}>Tile with Icon</Text>
                    <Tile
                        imageSrc={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                        title="Lorem ipsum dolor sit amet, consectetur"
                        icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
                        contentContainerStyle={{ height: 70 }}
                    >
                        <View
                            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Text>Caption</Text>
                            <Text>Caption</Text>
                        </View>
                    </Tile>
                </ScrollView>
            </View>
        );
    }
}
