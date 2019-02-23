import * as React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { List, Divider, withTheme,} from 'react-native-paper';

class List1 extends React.Component {
  state = {
    expanded: true,
  };

  _handlePress = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <ScrollView style={[styles.container, { backgroundColor: background }]}>
        <List.Section title="Single line">
          <List.Item
            left={props => <List.Icon {...props} icon="event" />}
            title="List item 1"
          />
          <List.Item
            left={props => <List.Icon {...props} icon="redeem" />}
            title="List item 2"
          />
        </List.Section>
        <Divider />
        <List.Section title="Two line">
          <List.Item
            left={() => (
              <Image
              source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }}                style={styles.image}
              />
            )}
            title="List item 1"
            description="Describes item 1"
          />
          <List.Item
            left={() => (
              <Image
              source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }}                
              style={styles.image}
              />
            )}
            right={props => <List.Icon {...props} icon="info" />}
            title="List item 2"
            description="Describes item 2"
          />
        </List.Section>
        <Divider />
        <List.Section title="Three line">
          <List.Item
            left={() => (
              <Image
              source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }}                
              style={styles.image}
              />
            )}
            title="List item 1"
            description="Describes item 1. Example of a very very long description."
          />
          <List.Item
            left={() => (
              <Image
              source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }}                
              style={styles.image}
              />
            )}
            right={props => <List.Icon {...props} icon="star-border" />}
            title="List item 2"
            description="Describes item 2. Example of a very very long description."
          />
        </List.Section>
        <List.Section title="Expandable list item">
          <List.Accordion
            left={props => <List.Icon {...props} icon="folder" />}
            title="Expandable list item"
          >
            <List.Item title="List item 1" />
            <List.Item title="List item 2" />
          </List.Accordion>
          <List.Accordion
            left={props => <List.Icon {...props} icon="folder" />}
            title="Start expanded"
            expanded={this.state.expanded}
            onPress={this._handlePress}
          >
            <List.Item title="List item 1" />
          </List.Accordion>
        </List.Section>
        <Divider />
        <List.Section title="Expandable & multiline list item">
          <List.Accordion
            title="Expandable list item"
            description="Describes the expandable list item"
          >
            <List.Item title="List item 1" />
            <List.Item title="List item 2" />
          </List.Accordion>
        </List.Section>
        <Divider />
        <List.Section title="Expandable list with icons">
          <List.Accordion
            left={props => <List.Icon {...props} icon="star" />}
            title="Accordion item 1"
          >
            <List.Item
              left={props => <List.Icon {...props} icon="thumb-up" />}
              title="List item 1"
            />
            <List.Item
              left={props => <List.Icon {...props} icon="thumb-down" />}
              title="List item 2"
            />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    margin: 8,
  },
});

export default withTheme(List1);