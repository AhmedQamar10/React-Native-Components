import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';


export default class Button1 extends Component {

    render() {
        return (
            <View>
                <View style={{ paddingTop: '30%' }}></View>
                <View>
                    <Text style={{ alignSelf: 'center', fontSize: 30 }}>Text</Text>
                    <Button icon="add-a-photo" mode="text"
                    color='red'
                        style={{ width: '40%', alignSelf: 'center' }}
                        onPress={() => console.log('Pressed')}>
                        Press me</Button>
                </View>
                <View style={{ paddingTop: '10%' }}></View>
                <View>
                    <Text style={{ alignSelf: 'center', fontSize: 30 }}>Outlined</Text>
                    <Button icon="add-a-photo" mode="outlined"
                        style={{ width: '40%', alignSelf: 'center' }}
                        onPress={() => console.log('Pressed')}>
                        Press me</Button>
                </View>
                <View style={{ paddingTop: '10%' }}></View>
                <View>
                    <Text style={{ alignSelf: 'center', fontSize: 30 }}>Contained</Text>
                    <Button icon="add-a-photo" mode="contained"
                        dark={false} color='green' uppercase={false}
                        style={{ width: '40%', alignSelf: 'center' }}
                        onPress={() => console.log('Pressed')}>
                        Press me</Button>
                </View>
            </View>
        );
    }
}