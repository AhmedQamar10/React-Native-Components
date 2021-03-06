import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
var { height, width } = Dimensions.get('window');
export default class web2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 5000);
  }
  render() {
    return (
      <View>
        {this.state.show ? (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator
              style={{ paddingTop: '50%' }}
              size="large"
              color="#0000ff"
            />
            <Text style={{ color: 'black', paddingTop: '40%' }}>
              Please Wait ...
            </Text>
          </View>
        ) : (
          <ScrollView>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#8e44ad',
                alignSelf: 'center',
                padding: '5%',
                borderColor:'black',
                borderWidth:1
              }}>
              The File One
            </Text>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/1196mvn.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i68.tinypic.com/zsqu04.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/28sn5m1.png' }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#8e44ad',
                alignSelf: 'center',
                padding: '5%',
                borderColor:'black',
                borderWidth:1
              }}>
              The File Two
            </Text>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/nd3e3n.png' }}
            />
             <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i68.tinypic.com/4kut0x.png' }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#8e44ad',
                alignSelf: 'center',
                padding: '5%',
                borderColor:'black',
                borderWidth:1
              }}>
              The File Three
            </Text>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i65.tinypic.com/2m7b7d4.png' }}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
