import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Colors,
  withTheme,
  RadioButton,
  Paragraph,TouchableRipple
} from 'react-native-paper';

class RadioButton1 extends React.Component {

  state = {
    value: 'first',
  };

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: background,
          },
        ]}
      >
        <RadioButton.Group
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        >
          <View style={styles.row}>
            <Paragraph>First</Paragraph>
            <RadioButton value="first" />
          </View>
          <View style={styles.row}>
            <Paragraph>Second</Paragraph>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
        <TouchableRipple onPress={() => this.setState({ checked: 'normal' })}>
          <View style={styles.row}>
            <Paragraph>Normal</Paragraph>
            <View pointerEvents="none">
              <RadioButton
                value="normal"
                status={
                  this.state.checked === 'normal' ? 'checked' : 'unchecked'
                }
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => this.setState({ checked: 'custom' })}>
          <View style={styles.row}>
            <Paragraph>Custom</Paragraph>
            <View pointerEvents="none">
              <RadioButton
                value="custom"
                color={Colors.blue500}
                status={
                  this.state.checked === 'custom' ? 'checked' : 'unchecked'
                }
              />
            </View>
          </View>
        </TouchableRipple>
        <View style={styles.row}>
          <Paragraph>Checked (Disabled)</Paragraph>
          <RadioButton value="first" status="checked" disabled />
        </View>
        <View style={styles.row}>
          <Paragraph>Unchecked (Disabled)</Paragraph>
          <RadioButton value="second" status="unchecked" disabled />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default withTheme(RadioButton1);