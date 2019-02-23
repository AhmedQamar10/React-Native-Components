


import React, { Component }
    from 'react';
import { View, Image }
    from 'react-native';
export default class
    Imag1 extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>



                <View style=
                    {{ paddingBottom: '10%' }}>
                    <Image
                        style={{
                            height: 100,
                            width: 100
                        }}
                        source={{
                            uri:
                                'http://i65.tinypic.com/mrb979.png'
                        }}
                    /></View>



                <Image
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: 100
                    }}
                    source={{
                        uri:
                            'http://i65.tinypic.com/mrb979.png'
                    }}
                /></View>);
    }
}
