import * as React from 'react';
import { Modal, Text,Provider } from 'react-native-paper';

export default class Modal1 extends React.Component {
  state = {
    visible: true,
  };

  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <Provider>
        <Modal visible={visible} onDismiss={this._hideModal}>
          <Text style={{alignSelf:'center',fontSize:30}}>Example Modal</Text>
        </Modal>
      </Provider>
    );
  }
}