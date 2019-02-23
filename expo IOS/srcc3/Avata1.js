import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements'

export default class Avata1 extends Component {

    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>Basic</Text>
                    <View style={{ padding: 20, flexDirection: 'row', alignSelf: 'center' }}>

                        <Avatar
                            small
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            medium
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            large
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            xlarge
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>Avatar with initials</Text>
                    <View style={{ padding: 20, flexDirection: 'row', alignSelf: 'center' }}>
                        <Avatar
                            small
                            rounded
                            title="MT"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            medium
                            title="BP"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            large
                            title="LW"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            xlarge
                            rounded
                            title="CR"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>Avatar with icons</Text>
                    <View style={{ padding: 20, flexDirection: 'row', alignSelf: 'center' }}>
                    <Avatar
                        small
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
                    />
                    <Avatar
                        medium
                        overlayContainerStyle={{ backgroundColor: 'blue' }}
                        icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 3, marginTop: 100 }}
                    />
                    <Avatar
                        large
                        icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
                        overlayContainerStyle={{ backgroundColor: 'white' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 4, marginTop: 75 }}
                    />
                    <Avatar
                        xlarge
                        rounded
                        icon={{ name: 'home', type: 'font-awesome' }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 5, marginRight: 60 }}
                    />
                    </View>
                </ScrollView>
            </View>
        );
    }
}