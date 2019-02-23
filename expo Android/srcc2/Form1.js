import React, { Component } from 'react';
import { Container, Root, Button, Title, Right, Content,Label,Textarea, Header,Picker, View, Form,Input,Item,Text, Left, Body, Icon } from 'native-base';
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
                <Form1 />
            </Root>
        );
    }
}

class Form1 extends Component {
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
                        <Title>Form</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
          <Form>
              <Text style={{alignSelf:'center',fontSize:20}}>Form</Text>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <View style={{paddingBottom:30}}></View>
          <Form>
          <Text style={{alignSelf:'center',fontSize:20}}>Fixed Label</Text>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{paddingBottom:30}}></View>
          <Form>
          <Text style={{alignSelf:'center',fontSize:20}}>Inline Label</Text>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{paddingBottom:30}}></View>
          <Form>
          <Text style={{alignSelf:'center',fontSize:20}}>Floating Label</Text>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{paddingBottom:30}}></View>
          <Form>
          <Text style={{alignSelf:'center',fontSize:20}}>Stacked Label</Text>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{paddingBottom:30}}></View>
          <Form>
          <Text style={{alignSelf:'center',fontSize:20}}>Picker Input</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Regular</Text>
          <Item regular>
            <Input placeholder='Regular Textbox' />
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Underline</Text>
          <Item>
            <Input placeholder="Underline Textbox" />
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Rounded</Text>
          <Item rounded>
            <Input placeholder='Rounded Textbox'/>
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Icon Input</Text>
          <Item>
            <Icon active name='home' />
            <Input placeholder='Icon Textbox'/>
          </Item>
          <Item>
            <Input placeholder='Icon Alignment in Textbox'/>
            <Icon active name='swap' />
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Success Input</Text>
          <Item success>
            <Input placeholder='Textbox with Success Input'/>
            <Icon name='checkmark-circle' />
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Error Input</Text>
          <Item error>
            <Input placeholder='Textbox with Error Input'/>
            <Icon name='close-circle' />
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Disabled Input</Text>
          <Item disabled>
            <Input disabled placeholder='Disabled Textbox'/>
            <Icon name='information-circle' />
          </Item>
          <View style={{paddingBottom:30}}></View>
          <Text style={{alignSelf:'center',fontSize:20}}>Text Area</Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>
          <View style={{paddingBottom:30}}></View>
        </Content>
            </Container>
        );
    }
}