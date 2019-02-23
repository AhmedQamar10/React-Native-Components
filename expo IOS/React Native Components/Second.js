import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Second extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 30,
          bottom:95
        }}>React Native Components</Text>
        <TouchableOpacity style={styles.butto}
          onPress={() => this.props.navigation.navigate('third')}
        >
          <Text style={styles.buttonTex}>Basic
            <Text style={{ color: 'black' }}> v0.57</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butto2}
          onPress={() => this.props.navigation.navigate('four')}
        >
          <Text style={styles.buttonTex}>Base
            <Text style={{ color: 'black' }}> v2.6.0</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butto3}
          onPress={() => this.props.navigation.navigate('five')}
        >
          <Text style={styles.buttonTex}>Elements
            <Text style={{ color: 'black' }}> v0.19.1</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butto4}
          onPress={() => this.props.navigation.navigate('six')}
        >
          <Text style={styles.buttonTex}>Paper
          <Text style={{ color: 'black' }}> v0.0</Text></Text>
        </TouchableOpacity>
      </View >
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butto: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 16,
    borderColor: '#007ee5',
    borderWidth: 3,
    bottom: 25,
    width: 200
  },
  butto2: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 16,
    borderColor: '#007ee5',
    borderWidth: 3,
    bottom: 10,
    width: 200
  },
  butto3: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 16,
    borderColor: '#007ee5',
    borderWidth: 3,
    bottom: -5,
    width: 200
  },
  butto4: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 16,
    borderColor: '#007ee5',
    borderWidth: 3,
    bottom: -20,
    width: 200
  },
  buttonTex: {
    color: '#007ee5',
    padding: 12,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: "center"
  }
});
