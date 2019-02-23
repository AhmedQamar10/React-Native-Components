import React, { Component } from 'react';
import { Text, Header, Content, Root, Left, Button, Icon, Body, Title, Right, View, Container } from "native-base";
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
                <Butto1 />
            </Root>
        );
    }
}

class Butto1 extends Component {

    render() {
        return (
            <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Button</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <View style={{ flexDirection: 'row', flex: 1, padding: 20 }}>
                            <View >
                                <Text style={{ padding: 10 }}>Button Theme</Text>
                                <Button light><Text> Light </Text></Button>
                                <Button primary><Text> Primary </Text></Button>
                                <Button success><Text> Success </Text></Button>
                                <Button info><Text> Info </Text></Button>
                                <Button warning><Text> Warning </Text></Button>
                                <Button danger><Text> Danger </Text></Button>
                                <Button dark><Text> Dark </Text></Button>
                            </View>
                            <View>
                                <Text style={{ padding: 10 }}>Transparent Button</Text>
                                <Button transparent light>
                                    <Text>Light</Text>
                                </Button>
                                <Button transparent>
                                    <Text>Primary</Text>
                                </Button>
                                <Button transparent success>
                                    <Text>Success</Text>
                                </Button>
                                <Button transparent info>
                                    <Text>Info</Text>
                                </Button>
                                <Button transparent warning>
                                    <Text>Warning</Text>
                                </Button>
                                <Button transparent danger>
                                    <Text>Danger</Text>
                                </Button>
                                <Button transparent dark>
                                    <Text>Dark</Text>
                                </Button>
                            </View>
                            <View>
                                <Text style={{ padding: 10 }}>Outline Button</Text>
                                <Button bordered light>
                                    <Text>Light</Text>
                                </Button>
                                <Button bordered>
                                    <Text>Primary</Text>
                                </Button>
                                <Button bordered success>
                                    <Text>Success</Text>
                                </Button>
                                <Button bordered info>
                                    <Text>Info</Text>
                                </Button>
                                <Button bordered warning>
                                    <Text>Warning</Text>
                                </Button>
                                <Button bordered danger>
                                    <Text>Danger</Text>
                                </Button>
                                <Button bordered dark>
                                    <Text>Dark</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, padding: 20 }}>
                            <View>
                                <Text style={{ padding: 10 }}>Rounded Button</Text>
                                <Button rounded light>
                                    <Text>Light</Text>
                                </Button>
                                <Button rounded>
                                    <Text>Primary</Text>
                                </Button>
                                <Button rounded success>
                                    <Text>Success</Text>
                                </Button>
                                <Button rounded info>
                                    <Text>Info</Text>
                                </Button>
                                <Button rounded warning>
                                    <Text>Warning</Text>
                                </Button>
                                <Button rounded danger>
                                    <Text>Danger</Text>
                                </Button>
                                <Button rounded dark>
                                    <Text>Dark</Text>
                                </Button>
                            </View>
                            <View>
                                <Text style={{ padding: 10 }}>Icon Button</Text>
                                <Button iconLeft light>
                                    <Icon name='arrow-back' />
                                    <Text>Back</Text>
                                </Button>
                                <Button iconRight light>
                                    <Text>Next</Text>
                                    <Icon name='arrow-forward' />
                                </Button>
                                <Button iconLeft>
                                    <Icon name='home' />
                                    <Text>Home</Text>
                                </Button>
                                <Button iconLeft transparent primary>
                                    <Icon name='beer' />
                                    <Text>Pub</Text>
                                </Button>
                                <Button iconLeft dark>
                                    <Icon name='cog' />
                                    <Text>Settings</Text>
                                </Button>
                            </View>
                            <View>
                                <Text style={{ padding: 10 }}>Button Size</Text>

                                <Button small primary>
                                    <Text>Default Small</Text>
                                </Button>
                                <Button success>
                                    <Text>Success Default</Text>
                                </Button>
                                <Button large dark>
                                    <Text>Dark Large</Text>
                                </Button>
                            </View>
                        </View>

                        <View>
                            <Text style={{ padding: 10, alignSelf: 'center', fontSize: 30 }}>Block Button</Text>
                            <Button block light>
                                <Text>Light</Text>
                            </Button>
                            <Button block>
                                <Text>Primary</Text>
                            </Button>
                            <Button block success>
                                <Text>Success</Text>
                            </Button>
                            <Button block info>
                                <Text>Info</Text>
                            </Button>
                            <Button block warning>
                                <Text>Warning</Text>
                            </Button>
                            <Button block danger>
                                <Text>Danger</Text>
                            </Button>
                            <Button block dark>
                                <Text>Dark</Text>
                            </Button>
                        </View>
                        <View>
                            <Text style={{ paddingTop: 30, alignSelf: 'center', fontSize: 30 }}>Full Button</Text>
                            <Button full light>
                                <Text>Light</Text>
                            </Button>
                            <Button full>
                                <Text>Primary</Text>
                            </Button>
                            <Button full success>
                                <Text>Success</Text>
                            </Button>
                            <Button full info>
                                <Text>Info</Text>
                            </Button>
                            <Button full warning>
                                <Text>Warning</Text>
                            </Button>
                            <Button full danger>
                                <Text>Danger</Text>
                            </Button>
                            <Button full dark>
                                <Text>Dark</Text>
                            </Button>
                        </View>
                        <View>
                            <Text style={{ paddingTop: 30, alignSelf: 'center', fontSize: 30 }}>Disabled Button</Text>
                            <Button disabled>
                                <Text>Default</Text>
                            </Button>
                            <Button disabled bordered>
                                <Text>Outline</Text>
                            </Button>
                            <Button disabled rounded>
                                <Text>Rounded</Text>
                            </Button>
                            <Button disabled large>
                                <Text>Custom</Text>
                            </Button>
                            <Button disabled iconRight>
                                <Text>Icon Button</Text>
                                <Icon name="home" />
                            </Button>
                            <Button disabled block>
                                <Text>Block</Text>
                            </Button>
                        </View>
                    </Content>
                    </Container>
        );
    }
}