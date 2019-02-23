
import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
export default class ActivityIndicato1 extends Component {
  render() {
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
        <ActivityIndicator
          size="small" color="#0000ff" />
        <ActivityIndicator
          style={{ paddingTop: 50 }}
          size="large" color="#00ff00" />
      </View>
    )
  }
}


