import React, { Component } from 'react';
import { Container, Text, Header, Content,ActionSheet, Root, Left, Button, Icon, Body, Title, Right } from "native-base";

import { Font, AppLoading } from "expo";
import { ScrollView } from 'react-native';

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
                <ActionShee1 />
            </Root>
        );
    }
}

var BUTTONS = [
    { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
class ActionShee1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>ActionSheet</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <Button
                            onPress={() =>
                                ActionSheet.show(
                                    {
                                        options: BUTTONS,
                                        cancelButtonIndex: CANCEL_INDEX,
                                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                        title: "Testing ActionSheet"
                                    },
                                    buttonIndex => {
                                        this.setState({ clicked: BUTTONS[buttonIndex] });
                                    }
                                )}
                        >
                            <Text>Actionsheet</Text>
                        </Button>
                    </Content>
                </Container>

            </ScrollView>
        );
    }
}