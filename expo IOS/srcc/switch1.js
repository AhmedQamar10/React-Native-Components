import React from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';
export default class switch1 extends React.Component {
    state = { switchValue: false }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 34, fontWeight: 'bold',
                    color: this.state.switchValue ? 'green' : 'red'
                }}>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>

                <Switch
                    style={{ marginTop: 30, height: 100 }}
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                    thumbColor={'blue'}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});