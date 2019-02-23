import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text, Toast, View, Root, Left, Body, Right, Title } from 'native-base';
import { Font, AppLoading } from "expo";

export default class HomeNav extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading />
                </Root>
            );
        }
        return (
            <Root>
                <Toast1 />
            </Root>
        );
    }
}

class Toast1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    render() {

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Toast</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Button onPress={() => Toast.show({
                        text: 'Wrong password!',
                        buttonText: 'Okay'
                    })}>
                        <Text>Toast</Text>
                    </Button>
                    <View style={{ padding: 15 }}></View>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                duration: 3000
                            })}
                    >
                        <Text>Toast with duration</Text>
                    </Button>
                    <View style={{ padding: 15 }}></View>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                position: "top"
                            })}
                    >
                        <Text>Top Toast Position</Text>
                    </Button>
                    <View style={{ padding: 5 }}></View>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                position: "bottom"
                            })}
                    >
                        <Text>Bottom Toast Position</Text>
                    </Button>
                    <View style={{ padding: 15 }}></View>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay"
                            })}
                    >
                        <Text>Default Toast Type</Text>
                    </Button>
                    <View style={{ padding: 5 }}></View>
                    <Button success
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                type: "success"
                            })}
                    >
                        <Text>Success Toast Type</Text>
                    </Button>
                    <View style={{ padding: 5 }}></View>
                    <Button warning
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                type: "warning"
                            })}
                    >
                        <Text>Warning Toast Type</Text>
                    </Button>
                    <View style={{ padding: 5 }}></View>
                    <Button danger
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                type: "danger"
                            })}
                    >
                        <Text>Danger Toast Type</Text>
                    </Button>
                    <View style={{ padding: 15 }}></View>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                textStyle: { color: "yellow" },
                                buttonText: "Okay"
                            })
                        }
                    >
                        <Text>Toast Text Style</Text>
                    </Button>
                    <View style={{ padding: 15 }}></View>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                buttonTextStyle: { color: "#008000" },
                                buttonStyle: { backgroundColor: "#5cb85c" }
                            })}
                    >
                        <Text>Toast Button Style</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}