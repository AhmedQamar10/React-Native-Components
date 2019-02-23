import React, { Component, TouchableNative } from 'react';
import { View } from 'react-native';
import { ButtonGroup } from 'react-native-elements'

export default class Group1 extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 100 }}
                />
            </View>
        );
    }
}
/* other solution using components
export default class Group1 extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      
    render() {
        const component1 = () => <Text>Hello</Text>
        const component2 = () => <Text>World</Text>
        const component3 = () => <Text>ButtonGroup</Text>
      const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
      const { selectedIndex } = this.state
      return (
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}} />
      )
    }
}
*/