import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Animated,
  ImageBackground,
} from 'react-native';

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValue: new Animated.Value(0),
      show: true,
    };
  }
  componentWillMount() {
    this.timer=setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 7000);
  }
  componentWillUnmount()
  {
    clearTimeout(this.timer)
  }
  _moveAndRotateAnimation = () => {
    Animated.parallel([
      //This contains Animations which run at the same time !
      Animated.sequence([
        Animated.timing(this.state.rotateValue, {
          toValue: 100,
          duration: 1500, //1000 miliseconds = 1 second
        }),
        Animated.timing(this.state.rotateValue, {
          toValue: 0,
          duration: 0,
        }),
      ]).start(),
    ]).start();
  };
  render() {
    const interpolatedRotateAnimation = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <ImageBackground
        source={{ uri: 'http://i68.tinypic.com/soamj8.jpg' }}
        style={styles.container}>
        {this.state.show ? (
          <ActivityIndicator size="large" color="#FC427B" />
        ) : (
          <View style={styles.container}>
            <Animated.Image
              source={{ uri: 'http://i63.tinypic.com/5kg7i9.jpg' }}
              style={[
                styles.imageView,
                { transform: [{ rotate: interpolatedRotateAnimation }] },
              ]}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this._moveAndRotateAnimation}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butto}
              onPress={() => this.props.navigation.navigate('second')}>
              <Text style={styles.buttonTex}>START</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0cbeff',
    alignSelf: 'center',
    borderRadius: 16,
    bottom: 10,
    width: 150,
  },
  buttonText: {
    color: 'white',
    padding: 12,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf:'center'
  },
  butto: {
    backgroundColor: '#0cbeff',
    alignSelf: 'center',
    borderRadius: 16,
    bottom: 60,
    width: 150,
  },
  buttonTex: {
    color: 'white',
    padding: 12,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  imageView: {
    width: 200,
    height: 200,
  },
});
