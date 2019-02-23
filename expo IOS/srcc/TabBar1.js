import React,{Component} from 'react';
import { Text, View, StyleSheet,TabBarIOS } from 'react-native';
export default class TabBar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'welcome'
        };
      }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'welcome'}
          systemIcon='featured'
          onPress={() => {
              this.setState({
                  selectedTab: 'welcome',
              });
          }}>
            <Welcome/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'more'}
          systemIcon='contacts'
          onPress={() => {
                this.setState({
                    selectedTab: 'more',
                });
          }}>
          <More/>
        </TabBarIOS.Item>
      </TabBarIOS>
        );
    }
}
const styles =StyleSheet.create({
    description: {
      fontSize: 20,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#123456',
    }
  });
   
  class Welcome extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            Welcome to your React Native Start Component!
          </Text>
        </View>
      );
    }
  }
  const styles2 = StyleSheet.create({
    description: {
      fontSize: 20,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#765432',
    }
  });
   
  class More extends Component {
    render() {
      return (
        <View style={styles2.container}>
          <Text style={styles2.description}>
            This could be your second tab
          </Text>
        </View>
      );
    }
  }