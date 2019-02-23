import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Avata from '../srcc3/Avata';
import  Badg from '../srcc3/Badg';
import Butto from '../srcc3/Butto';
import Group from '../srcc3/Group';
import Card from '../srcc3/Card';
import Check from '../srcc3/Check';
import Divide from '../srcc3/Divide';
import Form from '../srcc3/Form';
import Heade from '../srcc3/Heade';
import Ico from '../srcc3/Ico';
import List from '../srcc3/List';
import Pricing from '../srcc3/Pricing';
import Rating from '../srcc3/Rating';
import Search from '../srcc3/Search';
import SocialIcon from '../srcc3/SocialIcon';
import Slider from '../srcc3/Slider';
import Text from '../srcc3/Text';
import Tile from '../srcc3/Tile';
var { height, width } = Dimensions.get('window');
const CustomDrawerComponent = props => (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ backgroundColor: '#1B9CFC' }}>
            <View
                style={{
                    shadowOpacity: 10,
                    shadowRadius: 10,
                    shadowColor: '#a4b0be',
                    shadowOffset: { width: 0, height: 0 },
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 10,
                    paddingTop: 10,
                }}>
                <Image
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 60,
                    }}
                    source={{ uri: 'http://i67.tinypic.com/k2g668.png' }}
                />
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </View>
);
let routeConfigs = {
    Avatar: 
    {
        screen: Avata,
    },
    Badge:
    {
        screen:Badg
    },
    Button:
    {
        screen:Butto
    },
    ButtonGroup:
    {
        screen:Group
    },
    Card:
    {
        screen:Card
    },
    CheckBox:
    {
        screen:Check
    },
    Divider:
    {
        screen:Divide
    },
    Forms:
    {
        screen:Form
    },
    Header:
    {
        screen:Heade
    },
    Icon:
    {
        screen:Ico
    },
    List:
    {
        screen:List
    },
    Pricing:
    {
        screen:Pricing
    },
    Rating:
    {
        screen:Rating
    },
    SearchBar:
    {
        screen:Search
    },
    SocialIcon:
    {
        screen:SocialIcon
    },
    Slider:
    {
        screen:Slider
    },
    Text:
    {
        screen:Text
    },
    Tile:
    {
        screen:Tile
    }
};
let drawerNavigatorConfig = {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width / 1.8,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Avatar',
    contentOptions: {
        activeTintColor: 'red',
    },
};
const Four = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default Four;
