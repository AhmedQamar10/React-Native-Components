import React, { Component } from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default class Card1 extends Component {

    render() {
        return (
            <Card>
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        );
    }
}