import React, { Component } from 'react';
import { Container, Root, Button, Title, Right, Content, Header, View, Text, Left, Body, Icon } from 'native-base';
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
                <Icon1 />
            </Root>
        );
    }
}

class Icon1 extends Component {
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
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Icon</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{paddingLeft:'45%',paddingTop:'45%'}}>
                    <Icon name='home' style={{ fontSize: 80}}/>
                    <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 80, color: 'red' }} />
                    <Icon type="FontAwesome" name="home" style={{ fontSize: 80 }}/>

                </Content>
            </Container>
        );
    }
}