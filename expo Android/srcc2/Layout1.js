import React, { Component } from 'react';
import { Container, Root, Button, Title, Right, Content, Header, View, Text, Left, Body, Icon } from 'native-base';
import { Font, AppLoading } from "expo";
import { Col, Row, Grid } from 'react-native-easy-grid';

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
                <Layout1 />
            </Root>
        );
    }
}

class Layout1 extends Component {
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
                        <Title>Layout</Title>
                    </Body>
                    <Right />
                </Header>
                <Grid>
                    <Col style={{ backgroundColor: '#e67e22'}}></Col>
                    <Col>
                        <Row style={{ backgroundColor: '#00CE9F'}}></Row>
                        <Row style={{ backgroundColor: '#635DB7'}}></Row>
                    </Col>
                </Grid>
            </Container>
        );
    }
}