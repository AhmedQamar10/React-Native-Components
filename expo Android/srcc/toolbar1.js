import React, { Component } from 'react';
import { Text, ToolbarAndroid, View } from 'react-native';
export default class toolbar1 extends Component {
    constructor() {
        super();
        this.state = { actionText: 'Welcome React Native' }
    }
    onActionSelected(position) {
        this.setState({ actionText: toolbarActions[position].title })
    }
    render() {
        return (
            <View>
                <ToolbarAndroid style={{ height: 60, backgroundColor: '#34495e', }}
                    logo={{ uri: 'http://i63.tinypic.com/3004677.png' }}
                    actions={toolbarActions}
                    onActionSelected={this.onActionSelected.bind(this)}
                    subtitle={this.state.actionText}
                    titleColor="yellow"
                    title="My React" />
                <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold' }}>{this.state.actionText}</Text>
            </View>
        )
    }
}
const toolbarActions =
    [{ title: 'Create', icon: { uri: 'http://i68.tinypic.com/r1ir7p.png' }, show: 'always' },
    { title: 'Action 1' },
    { title: 'Action 2' },
    { title: 'Action 3' },
    { title: 'Action 4' },
    { title: 'Add', icon: { uri: 'http://i63.tinypic.com/15n2iaa.jpg' }, show: 'always' }]