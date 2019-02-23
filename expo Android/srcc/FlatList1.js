import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import flatfile from './flatfile';
class FlatListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          flex: 1,
          flexDirection: 'row',
          borderBottomColor: 'black',
          backgroundColor: this.props.index % 2 == 0 ? '#9c88ff' : '#ff7979',
        }}
        onPress={() => Alert.alert('Book name', this.props.item.book)}>
        <Image
          style={{ width: 80, height: 80, margin: 5 }}
          source={{ uri: this.props.item.image }}
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingBottom: '3%',
              color: 'white',
            }}>
            {this.props.item.book}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#30336b',
            }}>
            {this.props.item.auther}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class FlatList1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={flatfile}
          renderItem={({ item, index }) => {
            return <FlatListItem item={item} index={index} />;
          }}
          keyExtractor={(item, index) => item.book}
        />
      </View>
    );
  }
}
