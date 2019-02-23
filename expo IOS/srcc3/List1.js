import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image,ScrollView } from 'react-native';
import { List, ListItem,Avatar } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        title: 'Appointments',
        icon: 'av-timer'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        title: 'Trips',
        icon: 'flight-takeoff'
    },
]


export default class List1 extends Component {
    renderRow({ item }) {
        return (
            <ListItem
                keyExtractor={item => item.name}
                roundAvatar
                title={item.name}
                subtitle={item.subtitle}
                avatar={{ uri: item.avatar_url }}
            />
        )
    }
    renderRow1({ item }) {
        return (
            <ListItem
                avatar={<Avatar
                    rounded
                    source={item.avatar_url && { uri: item.avatar_url }}
                    title={item.name[0]}
                />}
                title={item.name}
                keyExtractor={item => item.name}
                subtitle={item.subtitle}
            />
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>Avatar</Text>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        list.map((l) => (
                            <ListItem
                                roundAvatar
                                avatar={{ uri: l.avatar_url }}
                                key={l.name}
                                title={l.name}
                            />
                        ))
                    }
                </List>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>link and icon</Text>
                <List>
                    {
                        list.map((item) => (
                            <ListItem
                                key={item.name}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                            />
                        ))
                    }
                </List>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>link and avatar</Text>
                <List>
                    <FlatList
                        data={list}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.name}
                    />
                </List>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>Custom avatar component</Text>
                <List>
                    <FlatList
                        data={list}
                        renderItem={this.renderRow1}
                        keyExtractor={item => item.name}
                    />
                </List>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>Custom View for Subtitle</Text>
                <List>
                    <ListItem
                        roundAvatar
                        title='Limited supply! Its like digital gold!'
                        keyExtractor={item => item.name}
                        subtitle={
                            <View style={styles.subtitleView}>
                                <Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} style={styles.ratingImage} />
                                <Text style={styles.ratingText}>5 months ago</Text>
                            </View>
                        }
                        avatar={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                    />
                </List>
                </ScrollView>
            </View>
        )
    }
}

styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    }
})