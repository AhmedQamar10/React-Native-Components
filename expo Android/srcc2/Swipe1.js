import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Root, Left, Body, Right, SwipeRow, View, Title, Text } from 'native-base';
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
                <Swipe1 />
            </Root>
        );
    }
}
const datas = [
    'Simon Mignolet',
    'Nathaniel Clyne',
    'Dejan Lovren',
    'Mama Sakho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
];
class Swipe1 extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Swipeable List</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem>
                                <Text> {data} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>}
                    />
                </Content>
                <Text style={{padding:20,fontSize:20,alignSelf:'center'}}>Swipe Row</Text>
                <Content scrollEnabled={false}>
                    <SwipeRow
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        left={
                            <Button success onPress={() => alert('Add')}>
                                <Icon active name="add" />
                            </Button>
                        }
                        body={
                            <View>
                                <Text>SwipeRow Body Text</Text>
                            </View>
                        }
                        right={
                            <Button danger onPress={() => alert('Trash')}>
                                <Icon active name="trash" />
                            </Button>
                        }
                    />
                </Content>
            </Container>
        );
    }
}