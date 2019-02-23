import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

export default class ListVie1 extends Component {
  render() {
    var standardDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    var movies = [
      {
        title: "Star Wars",
        releaseYear: "1977",
        auther: "James Patterson"
      },
      {
        title: "The Matrix",
        releaseYear: "1999",
        auther: "Truman Capote"

      }
    ];

    var clonedMovies = standardDataSource.cloneWithRows(movies);

    return (
      <View style={{ flex: 1, paddingTop: '50%', alignItems: 'center' }}>
        <ListView
          dataSource={clonedMovies}
          renderRow={(rowData) =>
            <Text style={{ fontSize: 13, paddingTop: '5%', fontWeight: 'bold', color: 'purple' }}>Title: {rowData.title},
            Year: {rowData.releaseYear} and auther: {rowData.auther}</Text>}

        />
      </View>
    );
  }
}