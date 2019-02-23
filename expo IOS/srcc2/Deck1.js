import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Root, Button, Title, Right, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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
                <Deck1 />
            </Root>
        );
    }
}

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: { uri: 'http://i65.tinypic.com/2vbqxbn.jpg' },
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: { uri: 'http://i65.tinypic.com/351bub5.jpg' },
    },
    {
        text: 'Card Three',
        name: 'Three',
        image: { uri: 'http://i68.tinypic.com/20z9qxk.jpg' },
    },
    {
        text: 'Card Four',
        name: 'Four',
        image: { uri: 'http://i66.tinypic.com/28khq1s.jpg' },
    },
];

class Deck1 extends Component {
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
                        <Title>Deck Swiper</Title>
                    </Body>
                    <Right />
                </Header>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        looping={false}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Over</Text>
                            </View>}
                        renderItem={item =>
                            <Card style={{ elevation: 10 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Swipe Right</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
            </Container>
        );
    }
}