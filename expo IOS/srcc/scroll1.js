import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';

export default class scroll1 extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#3498db' }}>
                    <Text style={{
                        paddingTop: 20, alignSelf: 'center',
                        fontSize: 20, fontWeight: 'bold'
                    }}>This is ScrollView Horizontal</Text>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={true}   >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                backgroundColor: '#fd79a8',
                                flex: 1,
                                margin: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        padding: 75,
                                        color: 'white',
                                        textAlign: 'center'
                                    }}
                                >
                                    Screen 1
                    </Text>
                            </View>
                            <View style={{
                                backgroundColor: '#e056fd',
                                flex: 1,
                                margin: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        padding: 75,
                                        color: 'white',
                                        textAlign: 'center'
                                    }}
                                >
                                    Screen 2
                    </Text>
                            </View>
                            <View style={{
                                backgroundColor: '#663399',
                                flex: 1,
                                margin: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        padding: 75,
                                        color: 'white',
                                        textAlign: 'center'
                                    }}
                                >
                                    Screen 3
                    </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <TextInput
                    style={{ padding: 10, margin: 10, borderWidth: 1 }}
                    placeholder='Enter text'>
                </TextInput>
                <View style={{ flex: 1, backgroundColor: '#3498db' }}>
                    <Text style={{
                        paddingTop: 20, alignSelf: 'center',
                        fontSize: 20, fontWeight: 'bold'
                    }}>This is ScrollView Vertical</Text>

                    <ScrollView maximumZoomScale={3}
                        minimumZoomScale={0.2}
                        keyboardDismissMode='on-drag'
                    >
                        <View style={{
                            backgroundColor: '#fd79a8',
                            flex: 1,
                            margin: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 65,
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                Screen 1
                    </Text>
                        </View>
                        <View style={{
                            backgroundColor: '#e056fd',
                            flex: 1,
                            margin: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 65,
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                Screen 2
                    </Text>
                        </View>
                        <View style={{
                            backgroundColor: '#663399',
                            flex: 1,
                            margin: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 65,
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                Screen 3
                    </Text>
                        </View>
                        <View style={{
                            backgroundColor: '#30336b',
                            flex: 1,
                            margin: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 65,
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                Screen 4
                    </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>);
    }
}