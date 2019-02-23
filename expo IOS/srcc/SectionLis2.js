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
export default class SectionLis2 extends Component {
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
              source={{ uri: 'http://i65.tinypic.com/30c16oh.png' }}
            />
             <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/jh5t8l.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i65.tinypic.com/15h0j6b.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i65.tinypic.com/1oq4hs.png' }}
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
              source={{ uri: 'http://i67.tinypic.com/2uqfz2u.png' }}
            />
             <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/2rztfo3.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i66.tinypic.com/296j061.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i68.tinypic.com/5l8nlv.png' }}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
