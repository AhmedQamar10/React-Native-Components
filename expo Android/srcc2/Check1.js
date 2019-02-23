import React, { Component } from 'react';
import { Container, Header, Title, Content, Root, Button,ListItem, Left, Right, Body, Icon, Text } from 'native-base';
import { Font, AppLoading } from "expo";
import {CheckBox} from 'react-native';
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
        <Check1 />
      </Root>
    );
  }
}

class Check1 extends Component {
  constructor()
  {
    super()
    this.state={checked:false,checked2:false,checked3:false}
 

  }
  checkbox()
  {
    this.setState({checked:!this.state.checked}) 
    alert("Value is "+!this.state.checked)  
  }
  checkbox2()
  {
    this.setState({checked2:!this.state.checked2})  
    alert("Value is "+!this.state.checked2) 
  }
  checkbox3()
  { 
    this.setState({checked3:!this.state.checked3}) 
    alert("Value is "+!this.state.checked3)  
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
            <Title>Check Box</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <ListItem>
            <CheckBox value={this.state.checked} onChange={()=>this.checkbox()}/>
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox value={this.state.checked2} onChange={()=>this.checkbox2()}/>
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox value={this.state.checked3} onChange={()=>this.checkbox3()}/>
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}