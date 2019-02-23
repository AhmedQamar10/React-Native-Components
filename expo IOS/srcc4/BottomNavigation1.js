import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Text, View } from 'react-native';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const PurchasedRoute = () => <Text>Purchased</Text>;

export default class BottomNavigation1 extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'music', title: 'Music', icon: 'queue-music', color: 'red' },
            { key: 'albums', title: 'Albums', icon: 'album', color: 'orange' },
            { key: 'recents', title: 'Recents', icon: 'history', color: 'green' },
            { key: 'purchased', title: 'Purchased', icon: 'shopping-cart', color: 'blue' },
        ]
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        purchased:PurchasedRoute
    });
    
    render() {
        return (
            <BottomNavigation barStyle={{paddingBottom: 10}}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}
/* other solution
renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
          case 'music':
            return <MusicRoute jumpTo={jumpTo} />;
          case 'albums':
            return <AlbumsRoute jumpTo={jumpTo} />;
        }
      }
*/