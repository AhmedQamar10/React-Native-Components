import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Colors, withTheme } from 'react-native-paper';

class IconButton1 extends React.Component {

  render() {
    const { colors } = this.props.theme;

    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <IconButton icon="add-a-photo" size={24} onPress={() => {}} />
        <IconButton
          icon="https"
          size={24}
          color={Colors.green500}
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
});

export default withTheme(IconButton1);