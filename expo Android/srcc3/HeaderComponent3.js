import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class HeaderComponent3 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('DrawerOpen');
                    }}
                >
                    <Icon name="menu" size={40} />
                </TouchableHighlight>

                <Text style={
                    {
                        paddingLeft: '30%',
                        paddingRight: '30%',
                        fontSize: 20,
                        color: '#007ee5',
                        fontWeight: 'bold'
                    }}>Elements</Text>

                <TouchableHighlight 
                onPress={() => this.props.navigation.navigate('second')}>
                    <Icon name="home" size={30} />
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#dfe4ea'
    },
})

