import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Tab,Tabs, ScrollableTab, Root, Left, Body, Right, Title } from 'native-base';
import { Font, AppLoading } from "expo";
import Tab1 from './Tab/Tab1';
import Tab2 from './Tab/Tab2';
import Tab3 from './Tab/Tab3';
import Tab4 from './Tab/Tab4';
import Tab5 from './Tab/Tab5';

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
                <Tabs1 />
            </Root>
        );
    }
}

class Tabs1 extends Component {

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
                        <Title>Tabs</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                <Tab heading="Tab1"//<Tab heading={ <TabHeading><Icon name="apps" /><Text>Tab1</Text></TabHeading>}> 
                >                        
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2 />
                    </Tab>
                    <Tab heading="Tab3">
                        <Tab3 />
                    </Tab>
                    <Tab heading="Tab4">
                        <Tab4 />
                    </Tab>
                    <Tab heading="Tab5">
                        <Tab5 />
                    </Tab>
                    <Tab heading="Tab1">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2 />
                    </Tab>
                   
                </Tabs>
            </Container>
        );
    }
}