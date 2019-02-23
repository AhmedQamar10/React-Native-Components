import React, { Component } from 'react';
import { Container, Root, Button, Title, Right, Content, Header, List, ListItem,Separator, Thumbnail, Switch, View, Text, Left, Body, Icon } from 'native-base';
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
                <List1 />
            </Root>
        );
    }
}

class List1 extends Component {
    
    render() {
        var items = [
            'Simon Mignolet',
            'Nathaniel Clyne',
            'Dejan Lovren',
            'Mama Sakho',
            'Emre Can'
        ];
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>List</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text style={{ alignSelf: 'center', fontSize: 30 }}>Basic</Text>
                    <List>
                        <ListItem>
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                    </List>
                    <List>
                        <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>List Divider</Text>
                        <ListItem itemDivider>
                            <Text>A</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Aaron Bennet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ali Connors</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>B</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bradley Horowitz</Text>
                        </ListItem>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>List Header</Text>
                    <List>
                        <ListItem itemHeader first>
                            <Text>COMEDY</Text>
                        </ListItem>
                        <ListItem >
                            <Text>Hangover</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>Cop Out</Text>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>ACTION</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Terminator Genesis</Text>
                        </ListItem>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>ListItem Selected</Text>
                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Nathaniel Clyne</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Dejan Lovren</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>ListItem NoIndent</Text>
                    <List>
                        <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Nathaniel Clyne</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Dejan Lovren</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>List Icon</Text>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active type="Entypo" name="aircraft" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="bluetooth" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>List Avatar</Text>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'http://i65.tinypic.com/351bub5.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>List Thumbnail</Text>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://i65.tinypic.com/351bub5.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>Dynamic List</Text>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item}</Text>
                            </ListItem>
                        }>
                    </List>
                    <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}>List Separator</Text>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}