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
export default class FlatList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  componentWillMount() {
    this.timer=setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 5000);
  }
  componentWillUnmount()
  {
    clearTimeout(this.timer)
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
              source={{ uri: 'http://i64.tinypic.com/2rm8f39.png' }}
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
              source={{ uri: 'http://i65.tinypic.com/wks5s7.png' }}
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
              source={{ uri: 'http://i63.tinypic.com/1z2hufa.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/k0thw.png' }}
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
              The File Four
            </Text>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i66.tinypic.com/1zqcz77.png' }}
            />
             <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i66.tinypic.com/2ughtfm.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/332xeuu.png' }}
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
              The File Five
            </Text>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i66.tinypic.com/i6gpkh.png' }}
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
              The File Six
            </Text>
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i64.tinypic.com/a10df.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i65.tinypic.com/1z6tv2g.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/33a85tu.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/27yo9kk.png' }}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
