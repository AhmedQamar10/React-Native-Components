import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Appbar1 extends Component {

  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={this._goBack}
            />
            <Appbar.Content
              title="Title"
              subtitle="Subtitle"
            />
            <Appbar.Action icon="search" onPress={this._onSearch} />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
          </Appbar.Header>
          <View style={{paddingTop:'128%'}}></View>
          <Appbar>
            <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
            <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
            <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
            <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
          </Appbar>
        </ScrollView>
      </View>
    );
  }
}