import React, { Component } from 'react';
import { Banner } from 'react-native-paper';
import { Text, View, ScrollView, Image } from 'react-native';

export default class Banner1 extends Component {

    state = {
        visible: true,
    };

    render() {
        return (
            <View>
                <Banner
                    visible={this.state.visible}
                    actions={[
                        {
                            label: 'Fix it',
                            onPress: () => this.setState({ visible: false }),
                        },
                        {
                            label: 'Learn more',
                            onPress: () => this.setState({ visible: false }),
                        },
                    ]}
                    image={({ size }) =>
                        <Image
                            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                            style={{
                                width: size,
                                height: size,
                            }}
                        />
                    }
                >
                    There was a problem processing a transaction on your credit card.
          </Banner>
                <Image
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>
        );
    }
}