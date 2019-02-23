import React, { Component } from 'react';
import { Container, Header, Title, Content, Root, Card,CardItem,Thumbnail, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Image} from 'react-native';
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
        <Card1 />
      </Root>
    );
  }
}

class Card1 extends Component {
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
            <Title>Card</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Text style={{alignSelf:'center',fontSize:30}}>Card</Text>
        <Card>
            <CardItem>
              <Body>
                <Text>
                Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>Card Header and Footer</Text>
          <Card>
          <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>CardItem Bordered</Text>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>CardItem Button</Text>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>Card Transparent</Text>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>Card List</Text>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus"/>
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>Card Image</Text>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://i67.tinypic.com/1znvew7.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://i65.tinypic.com/2s7sz1d.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Text style={{alignSelf:'center',paddingTop:10,fontSize:30}}>Card Showcase</Text>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://i67.tinypic.com/1znvew7.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://i65.tinypic.com/2s7sz1d.png'}} style={{height: 200, width: '100%', flex: 1}}/>
                <Text>
                  Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}