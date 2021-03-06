
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ProgressBar,
  Paragraph,
  Colors,
  withTheme,
} from 'react-native-paper';

class ProgressBar1 extends React.Component {

  state = {
    progress: 0,
  };

  componentDidMount() {
    this._interval = setInterval(
      () =>
        this.setState(state => ({
          progress: state.progress < 1 ? state.progress + 0.01 : 0,
        })),
      16
    );
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }


  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <Paragraph>ProgressBar primary color</Paragraph>
        <ProgressBar progress={this.state.progress} />
        <Paragraph>ProgressBar custom color</Paragraph>
        <ProgressBar progress={this.state.progress} color={Colors.red800} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default withTheme(ProgressBar1);