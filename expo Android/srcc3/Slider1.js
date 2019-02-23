import React, { Component } from 'react';
import { Slider } from 'react-native-elements'
import { View, Text,StyleSheet } from 'react-native'

export default class Slider1 extends Component {

    state = {
        value: 10
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={{
                    alignSelf: 'center', fontSize: 30,
                    paddingBottom: 20, fontWeight: 'bold', color: 'red'
                }}>
                    Value: {this.state.value}
                </Text>
                <Slider
                    value={this.state.value}
                    minimumTrackTintColor={'#8e44ad'}
                    maximumValue={100}
                    maximumTrackTintColor={'#2c3e50'}
                    thumbTintColor={'blue'}
                    onValueChange={value => this.setState({ value })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "stretch",
        justifyContent: "center"
    }
});
