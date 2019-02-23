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
              source={{ uri: 'http://i65.tinypic.com/ru08b5.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i64.tinypic.com/mxhv.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i67.tinypic.com/vzuip0.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/b8s0og.png' }}
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
              source={{ uri: 'http://i66.tinypic.com/29wqsg1.png' }}
            />
             <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i63.tinypic.com/25qskew.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i68.tinypic.com/n4832x.png' }}
            />
            <Image
              style={{ width: width, height: height / 1.92 }}
              source={{ uri: 'http://i64.tinypic.com/2ajx91i.png' }}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
