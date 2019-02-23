import * as React from 'react';
import { Portal, Text } from 'react-native-paper';

export default class Portal1 extends React.Component {
    render() {
        return (
                <Portal.Host>
                    <Text>This is rendered at a different place</Text>
                </Portal.Host>
        );
    }
}