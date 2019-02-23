import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'



export default class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            nickname: '',
            error: ''
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={styles.containerStyle}>
                    <FormLabel>User ID</FormLabel>
                    <FormInput placeholder="user"
                    />
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel>Nickname</FormLabel>
                    <FormInput placeholder="name"
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Button
                        buttonStyle={{ backgroundColor: '#2096f3' }}
                        title='Test'
                    />
                </View>
                <View style={styles.containerStyle}>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        marginTop: 10
    }
}
