import React, { Component } from 'react';

import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]
export default class Card1 extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                <ScrollView>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>Basic</Text>
                    <Card title="CARD WITH DIVIDER" >
                        {
                            users.map((u, i) => {
                                return (
                                    <View key={i} style={{ flexDirection: 'row' }}>
                                        <Image style={{
                                            height: 52,
                                            width: 52,
                                        }}
                                            resizeMode="cover"
                                            source={{ uri: u.avatar }}
                                        />
                                        <Text style={{ paddingTop: 15, padding: 20, fontSize: 20 }}>{u.name}</Text>
                                    </View>
                                );
                            })
                        }
                    </Card>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>ListItem</Text>
                    <Card containerStyle={{ padding: 0 }} >
                        {
                            users.map((u, i) => {
                                return (
                                    <ListItem
                                        key={i}
                                        roundAvatar
                                        title={u.name}
                                        avatar={{ uri: u.avatar }}
                                    />
                                );
                            })
                        }
                    </Card>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>Text and Button as children</Text>
                    <Card
                        title='HELLO WORLD'
                        image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
  </Text>
                        <Button
                            icon={{ name: 'code' }}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW' />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}