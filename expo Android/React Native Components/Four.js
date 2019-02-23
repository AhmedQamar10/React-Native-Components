import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Anatom from '../srcc2/Anatom';
import Accordio from '../srcc2/Accordio';
import ActionShee from '../srcc2/ActionShee';
import Badg from '../srcc2/Badg';
import Butto from '../srcc2/Butto';
import card from '../srcc2/card';
import check from '../srcc2/check';
import Datee from '../srcc2/Datee';
import Deck from '../srcc2/Deck';
import Fab from '../srcc2/Fab';
import Footer from '../srcc2/Footer';
import Form from '../srcc2/Form';
import Header from '../srcc2/Header';
import Ico from '../srcc2/Ico';
import Layou from '../srcc2/Layou';
import Lis from '../srcc2/Lis';
import Picke from '../srcc2/Picke';
import Radi from '../srcc2/Radi';
import Search from '../srcc2/Search';
import Segment from '../srcc2/Segment';
import Spin from '../srcc2/Spin';
import Swipe from '../srcc2/Swipe';
import Tabs from '../srcc2/Tabs';
import Thumbnai from '../srcc2/Thumbnai';
import Toast from '../srcc2/Toast';
import Typography from '../srcc2/Typography';
var { height, width } = Dimensions.get('window');
const CustomDrawerComponent = props => (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ backgroundColor: '#341f97' }}>
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
                    source={{ uri: 'http://i64.tinypic.com/2uzf1uo.png' }}
                />
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </View>
);
let routeConfigs = {
    Anatomy: {
        screen: Anatom,
    },
    Accordion:
    {
        screen:Accordio
    },
    ActionSheet:
    {
        screen:ActionShee
    },
    Badge:
    {
        screen:Badg
    },
    Button:
    {
        screen:Butto
    },
    Card:
    {
        screen:card
    },
    CheckBox:
    {
        screen:check
    },
    DatePicker:
    {
        screen:Datee
    },
    DeckSwiper:
    {
        screen:Deck
    },
    FABs:
    {
        screen:Fab
    },
    FooterTabs:
    {
        screen:Footer
    },
    Form:
    {
        screen:Form
    },
    Header:
    {
        screen:Header
    },
    Icon:
    {
        screen:Ico
    },
    Layout:
    {
        screen:Layou
    },
    List:
    {
        screen:Lis
    },
    Picker:
    {
        screen:Picke
    },
    RadioButton:
    {
        screen:Radi
    },
    SearchBar:
    {
        screen:Search
    },
    Segment:
    {
        screen:Segment
    },
    Spinner:
    {
        screen:Spin
    },
    SwipeableList:
    {
        screen:Swipe
    },
    Tabs:
    {
        screen:Tabs
    },
    Thumbnail:
    {
        screen:Thumbnai
    },
    Toast:
    {
        screen:Toast
    },
    Typography:
    {
        screen:Typography
    }
};
let drawerNavigatorConfig = {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width / 1.8,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Anatomy',
    contentOptions: {
        activeTintColor: 'red',
    },
};
const Four = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default Four;
