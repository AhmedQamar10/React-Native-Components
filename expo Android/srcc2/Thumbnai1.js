import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text, Thumbnail, View, Root, Left, Body, Right, Title } from 'native-base';
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
                <Thumbnai1 />
            </Root>
        );
    }
}

class Thumbnai1 extends Component {

    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Thumbnail</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{padding:10,fontSize:30}}>Square Thumbnail</Text>
                        <Thumbnail square small source={{ uri: uri }} />
                        <View style={{padding:10}}></View>
                        <Thumbnail square source={{ uri: uri }} />
                        <View style={{padding:10}}></View>
                        <Thumbnail square large source={{ uri: uri }} />
                        <Text style={{paddingTop:50,padding:10,fontSize:30}}>Circular Thumbnail</Text>
                        <Thumbnail small source={{ uri: uri }} />
                        <View style={{padding:10}}></View>
                        <Thumbnail source={{ uri: uri }} />
                        <View style={{padding:10}}></View>
                        <Thumbnail large source={{ uri: uri }} />
                    </View>
                </Content>
            </Container>
        );
    }
}