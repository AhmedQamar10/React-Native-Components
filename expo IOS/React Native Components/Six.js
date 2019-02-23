import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Appbar from '../srcc4/Appbar';
import Banner from '../srcc4/Banner';
import BottomNavigation from '../srcc4/BottomNavigation';
import Button from '../srcc4/Button';
import Caption from '../srcc4/Caption';
import Card from '../srcc4/Card';
import Checkbox from '../srcc4/Checkbox';
import Chip from '../srcc4/Chip';
import DataTable from '../srcc4/DataTable';
import Dialog from '../srcc4/Dialog';
import Divider from '../srcc4/Divider';
import Drawer from '../srcc4/Drawer';
import FAB from '../srcc4/FAB';
import Headline from '../srcc4/Headline';
import Helper from '../srcc4/Helper';
import IconButton from '../srcc4/IconButton';
import List from '../srcc4/List';
import Modal from '../srcc4/Modal';
import Paragraph from '../srcc4/Paragraph';
import Portal from '../srcc4/Portal';
import ProgressBar from '../srcc4/ProgressBar';
import RadioButton from '../srcc4/RadioButton';
import Searchbar from '../srcc4/Searchbar';
import Subheading from '../srcc4/Subheading';
import Snackbar from '../srcc4/Snackbar';
import Surface from '../srcc4/Surface';
import Switch from '../srcc4/Switch';
import Text from '../srcc4/Text';
import TextInput from '../srcc4/TextInput';
import Title from '../srcc4/Title';
import ToggleButton from '../srcc4/ToggleButton';
import TouchableRipple from '../srcc4/TouchableRipple';

var { height, width } = Dimensions.get('window');
const CustomDrawerComponent = props => (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ backgroundColor: '#673AB7' }}>
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
                    source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }}
                />
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </View>
);
let routeConfigs = {
    Appbar: 
    {
        screen: Appbar,
    },
    Banner:
    {
        screen:Banner
    },
    BottomNavigation:
    {
        screen:BottomNavigation
    },
    Button:
    {
        screen:Button
    },
    Caption:
    {
        screen:Caption
    },
    Card:
    {
        screen:Card
    },
    Checkbox:
    {
        screen:Checkbox
    },
    Chip:
    {
        screen:Chip
    },
    DataTable:
    {
        screen:DataTable
    },
    Dialog:
    {
        screen:Dialog
    },
    Divider:
    {
        screen:Divider
    },
    Drawer:
    {
        screen:Drawer
    },
    FAB:
    {
        screen:FAB
    },
    Headline:
    {
        screen:Headline
    },
    Helper:
    {
        screen:Helper
    },
    IconButton:
    {
        screen:IconButton
    },
    List:
    {
        screen:List
    },
    Modal:
    {
        screen:Modal
    },
    Paragraph:
    {
        screen:Paragraph
    },
    Portal:
    {
        screen:Portal
    },
    ProgressBar:
    {
        screen:ProgressBar
    },
    RadioButton:
    {
        screen:RadioButton
    },
    Searchbar:
    {
        screen:Searchbar
    },
    Subheading:
    {
        screen:Subheading
    },
    Snackbar:
    {
        screen:Snackbar
    },
    Surface:
    {
        screen:Surface
    },
    Switch:
    {
        screen:Switch
    },
    Text:
    {
        screen:Text
    },
    TextInput:
    {
        screen:TextInput
    },
    Title:
    {
        screen:Title
    },
    ToggleButton:
    {
        screen:ToggleButton
    },
    TouchableRipple:
    {
        screen:TouchableRipple
    }
};
let drawerNavigatorConfig = {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width / 1.8,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Appbar',
    contentOptions: {
        activeTintColor: 'red',
    },
};
const Four = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default Four;
