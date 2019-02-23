import React, { Component }
    from 'react';
import { ImageBackground, Text }
    from 'react-native';
export default class
    ImagBackground1 extends Component {
    render() {
        return (
            <ImageBackground source={{
                uri:
                    'http://i64.tinypic.com/nx5i8i.jpg'
            }}


                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'white'
                }}>React</Text>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Native</Text>
            </ImageBackground>);
    }
}
