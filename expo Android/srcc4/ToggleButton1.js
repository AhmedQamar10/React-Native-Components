import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { withTheme, ToggleButton, List } from 'react-native-paper';

class ToggleButton1 extends React.Component{

  state = {
    first: 'bold',
    second: 'left',
    fruit: 'watermelon',
    status: 'checked',
  };

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <List.Section title="Single">
          <View style={styles.row}>
            <ToggleButton
              icon="android"
              value="android"
              status={this.state.status}
              onPress={status => {
                this.setState({
                  status: status === 'checked' ? 'unchecked' : 'checked',
                });
              }}
            />
          </View>
        </List.Section>
        <List.Section title="Group">
          <View style={styles.toggleGroup}>
            <ToggleButton.Group
              value={this.state.first}
              onValueChange={value =>
                this.setState({
                  first: value,
                })
              }
            >
              <ToggleButton disabled icon="format-italic" value="italic" />
              <ToggleButton icon="format-bold" value="bold" />
              <ToggleButton icon="format-underlined" value="underlined" />
              <ToggleButton icon="format-color-text" value="format-color" />
            </ToggleButton.Group>
          </View>
        </List.Section>
        <List.Section title="Custom">
          <View style={styles.group}>
            <ToggleButton.Group
              value={this.state.fruit}
              onValueChange={value =>
                this.setState({
                  fruit: value,
                })
              }
            >
              <ImageBackground
                style={{
                  width: 143,
                  height: 153,
                  margin: 2,
                }}
                source={{
                  uri:
                    'https://images.pexels.com/photos/1068534/pexels-photo-1068534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                }}
              >
                <ToggleButton
                  borderless
                  value="watermelon"
                  size={24}
                  style={{
                    position: 'absolute',
                    right: 0,
                  }}
                  color="white"
                  icon={
                    this.state.fruit === 'watermelon'
                      ? 'favorite'
                      : 'favorite-border'
                  }
                />
              </ImageBackground>
              <ImageBackground
                style={{
                  width: 143,
                  height: 153,
                  margin: 2,
                }}
                source={{
                  uri:
                    'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                }}
              >
                <ToggleButton
                  borderless
                  value="strawberries"
                  size={24}
                  style={{
                    position: 'absolute',
                    right: 0,
                  }}
                  color="white"
                  icon={
                    this.state.fruit === 'strawberries'
                      ? 'favorite'
                      : 'favorite-border'
                  }
                />
              </ImageBackground>
            </ToggleButton.Group>
          </View>
        </List.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  group: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
});

export default withTheme(ToggleButton1);