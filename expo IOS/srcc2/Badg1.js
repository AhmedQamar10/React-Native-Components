import React, { Component } from 'react';
import { Container, Text, Header, Content, Badge, Root, Left, Button, Icon, Body, Title, Right } from "native-base";

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
                <Badg1 />
            </Root>
        );
    }
}

class Badg1 extends Component {

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
                            <Title>Badge</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Text>2</Text>
                        </Badge>
                        <Badge success>
                            <Text>2</Text>
                        </Badge>
                        <Badge info>
                            <Text>2</Text>
                        </Badge>
                        <Badge warning>
                            <Text>2</Text>
                        </Badge>
                        <Badge danger>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }} />
                        </Badge>
                        <Badge style={{ backgroundColor: 'black' }}>
                            <Text style={{ color: 'white' }}>1866</Text>
                        </Badge>
                    </Content>
                </Container>

            </ScrollView>
        );
    }
}