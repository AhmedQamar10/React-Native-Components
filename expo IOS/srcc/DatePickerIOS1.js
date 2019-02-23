import React, { Component } from 'react';
import { View, Text, TouchableOpacity }
  from 'react-native';
import DateTimePicker from
  'react-native-modal-datetime-picker';
import moment from 'moment';
export default class DatePickerIOS1 extends
  Component {
  constructor() {
    super();
    this.state =
      { isVisible: false, chosenDate: '' };
  }



  handlePicker = datetime => {
    this.setState({
      isVisible: false,
      chosenDate:
        moment(datetime).
          format('MMMM, Do YYYY HH:mm'),
    });
  };


  showPicker = () => {
    this.setState(
      { isVisible: true });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };



  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#1e90ff',
            fontSize: 20,
            fontWeight: 'bold',
            paddingBottom: 50,
          }}>
          {this.state.chosenDate}



        </Text>
        <TouchableOpacity
          style={{
            width: 250,
            backgroundColor: '#330066',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 25,
            shadowColor: 'grey',
            shadowOpacity: 1,
            shadowOffset:
              { width: 0, height: 0 },
          }}



          onPress={this.showPicker}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Show DataPicker
          </Text>
        </TouchableOpacity>



        <DateTimePicker
          cancelTextIOS={'Exit'}
          confirmTextIOS={'OKAY'}
          cancelTextStyle=
          {{ color: 'red', fontSize: 20 }}
          confirmTextStyle=
          {{ color: 'green', fontSize: 20 }}
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
          is24Hour={true}
        /*mode={'date'}
        datePickerModeAndroid={'spinner'}*/
        />
      </View>);
  }
}
