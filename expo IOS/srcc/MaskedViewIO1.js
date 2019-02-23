import React, { Component } from 'react';
import { MaskedViewIOS, Text, Image, View } from 'react-native';

export default class MaskedViewIO1 extends Component {
    render() {
        return (
            <MaskedViewIOS
                style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View style={{
                        // Transparent background because mask is based off alpha channel.
                        backgroundColor: 'transparent',
                        flex: 1,
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 60,
                            paddingTop: '10%',
                            color: 'black',
                            fontWeight: 'bold',
                        }}>
                            Basic Mask
            </Text>
                        <Text style={{
                            fontSize: 60,
                            paddingTop: '30%',
                            color: 'black',
                            fontWeight: 'bold',
                        }}>
                            Basic Mask
            </Text>
                        <Text style={{
                            fontSize: 60,
                            paddingTop: '30%',
                            color: 'black',
                            fontWeight: 'bold',
                        }}>
                            Basic Mask
            </Text>
                    </View>
                }
            >
                { /* Shows behind the mask, you can put anything here, such as an image */}
                <View style={{ flex: 1, height: '100%', backgroundColor: 'red' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#00cec9' }} />
                <Image source={{ uri: 'http://i65.tinypic.com/1zc0qv5.jpg' }} style={{ flex: 1, height: '100%', }} />
            </MaskedViewIOS>
        );
    }
}