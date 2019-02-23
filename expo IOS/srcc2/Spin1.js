import React, { Component } from 'react';
import { Container, Root, Button, Title, Right, Content, Header, Spinner, Text, Left, Body, Icon } from 'native-base';
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
                <Spin1 />
            </Root>
        );
    }
}

class Spin1 extends Component {

    render() {

        return (
            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Spin</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Spinner />
                    <Spinner color='red' />
                    <Spinner color='green' />
                    <Spinner color='blue' />
                </Content>
            </Container>
        );
    }
}