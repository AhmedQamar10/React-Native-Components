import React, { Component } from 'react';
import { Container, Header, Content, Button,H1,H2,H3,Text, Icon, Root, Left, Body, Title } from 'native-base';
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
                <Typography1 />
            </Root>
        );
    }
}

class Typography1 extends Component {

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
                        <Title>Typography</Title>
                    </Body>
                </Header>
                <Content padder>
                    <H1>Header One</H1>
                    <H2>Header Two</H2>
                    <H3>Header Three</H3>
                    <Text>Default</Text>
                </Content>
            </Container>
        );
    }
}