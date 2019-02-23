import React, { Component } from 'react';
import { Container, Root, Button, Title, Right, Subtitle, Header, Text, Left, Body, Icon } from 'native-base';
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
                <Header1 />
            </Root>
        );
    }
}

class Header1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container>
                <Header //transparent //noLeft  //span //noShadow 
                >
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                        <Subtitle>Subtitle</Subtitle>
                    </Body>
                    <Right>
                        <Button hasText transparent>
                            <Text>Cancel</Text>
                        </Button>
                    </Right>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}