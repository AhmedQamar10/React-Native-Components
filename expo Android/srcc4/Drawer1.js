import * as React from 'react';
import { Drawer } from 'react-native-paper';

export default class Drawer1 extends React.Component {
  state = {
    active: 'first',
  };

  render() {
    const { active } = this.state;

    return (
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item" icon='menu'
          active={active === 'first'}
          onPress={() => { this.setState({ active: 'first' }); }}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'} icon="home"
          onPress={() => { this.setState({ active: 'second' }); }}
        />
     </Drawer.Section>
    );
  }
}