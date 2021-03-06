import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import ActivityIndicato from '../srcc/ActivityIndicato';
import Button from '../srcc/Button';
import DatePickerIOS from '../srcc/DatePickerIOS';
import FlatList from '../srcc/FlatList';
import Imag from '../srcc/Imag';
import ImagBackground from '../srcc/ImagBackground';
import InputAccessoryVie from '../srcc/InputAccessoryVie';
import KeyboardAvoidingVie from '../srcc/KeyboardAvoidingVie';
import ListVie from '../srcc/ListVie';
import MaskedViewIO from '../srcc/MaskedViewIO';
import model from '../srcc/model';
import Picke from '../srcc/Picke';
import Picy from '../srcc/Picy';
import Progy from '../srcc/Progy';
import refresh from '../srcc/refresh';
import SafeAreaVie from '../srcc/SafeAreaVie';
import scroll from '../srcc/scroll';
import SectionLis from '../srcc/SectionLis';
import SegmentedControl from '../srcc/SegmentedControl';
import slide from '../srcc/slide';
import Snapshot from '../srcc/Snapshot';
import status from '../srcc/status';
import switc from '../srcc/switc';
import TabBar from '../srcc/TabBar';
import text from '../srcc/text';
import tinput from '../srcc/tinput';
import Highlight from '../srcc/Highlight';
import Opacity from '../srcc/Opacity';
import outFeedback from '../srcc/outFeedback';
import view from '../srcc/view';
import web from '../srcc/web';
var { height, width } = Dimensions.get('window');
const CustomDrawerComponent = props => (

  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={{ backgroundColor: '#57606f' }}>
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
          source={{ uri: 'http://i65.tinypic.com/mrb979.png' }}
        />
      </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);
let routeConfigs = {
  ActivityIndicator: {
    screen: ActivityIndicato,
  },
  Button: {
    screen: Button,
  },
  DatePickerIOS: {
    screen: DatePickerIOS,
  },
  FlatList: {
    screen: FlatList,
  },
  Image: {
    screen: Imag,
  },
  ImageBackground: {
    screen: ImagBackground,
  },
  InputAccessoryView: {
    screen: InputAccessoryVie,
  },
  KeyboardAvoidingView:
  {
    screen: KeyboardAvoidingVie
  },
  ListView:
  {
    screen: ListVie
  },
  MaskedViewIOS:{
    screen:MaskedViewIO
  },
  Modal:
  {
    screen: model
  },
  Picker_P1:
  {
    screen: Picke
  },
  Picker_P2:
  {
    screen: Picy
  },
  Progress:
  {
    screen: Progy
  },
  RefreshControl:
  {
    screen: refresh
  },
  SafeAreaView:{
    screen:SafeAreaVie
  },
  ScrollView:
  {
    screen: scroll
  },
  SectionList:
  {
    screen: SectionLis
  },
  SegmentedControl:
  {
    screen: SegmentedControl
  },
  Slider:
  {
    screen: slide
  },
  SnapshotView:
  {
    screen: Snapshot
  }, 
  StatusBar:
  {
    screen: status
  },
  Switch:
  {
    screen: switc
  },
  TabBarIOS:{
    screen:TabBar
  },
  Text:
  {
    screen: text
  },
  TextInput:
  {
    screen: tinput
  },
  TouchableHighlight:
  {
    screen: Highlight
  },
  TouchableOpacity:
  {
    screen: Opacity
  },
  TouchableWithoutFeedback:
  {
    screen: outFeedback
  },
  View:
  {
    screen: view
  },
  WebView:
  {
    screen: web
  }
};
let drawerNavigatorConfig = {
  contentComponent: CustomDrawerComponent,
  drawerWidth: width/1.8,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  initialRouteName: 'ActivityIndicator',
  contentOptions: {
    activeTintColor: 'red',
  },
};
const Third = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default Third ;
