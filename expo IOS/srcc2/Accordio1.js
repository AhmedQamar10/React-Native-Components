import React, { Component } from 'react';
import { Container, View,Text, Header, Content, Accordion, Root, Left, Button, Icon, Body, Title, Right } from "native-base";
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
                <Accordio1 />
            </Root>
        );
    }
}

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
class Accordio1 extends Component {
    _renderHeader(title, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
            >
                <Text style={{ fontWeight: "600" }}>
                    {" "}{title.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(content) {
        return (
            <Text
                style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}
            >
                {content.content}
            </Text>
        );
    }
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
                            <Title>Accordion</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <Accordion dataArray={dataArray} expanded={3} />
                        <View style={{ padding: 10 }}></View>
                        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
                        <View style={{ padding: 10 }}></View>
                        <Accordion
                            dataArray={dataArray}
                            icon="add"
                            expandedIcon="remove"
                            iconStyle={{ color: "green" }}
                            expandedIconStyle={{ color: "red" }}
                        />
                        <View style={{ padding: 10 }}></View>
                        <Accordion
                            dataArray={dataArray}
                            headerStyle={{ backgroundColor: "#b7daf8" }}
                            contentStyle={{ backgroundColor: "#ddecf8" }}
                        />
                        <View style={{ padding: 10 }}></View>
                        <Accordion
                            dataArray={dataArray}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </Content>
                </Container>
        );
    }
}