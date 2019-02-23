import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements'
import { View } from 'react-native'

export default class SocialIcon1 extends Component {

    render() {
        return (
            <View>
                <SocialIcon
                    type='twitter'
                />

                <SocialIcon
                    raised={false}
                    type='gitlab'
                />

                <SocialIcon
                    light
                    type='medium'
                />

                <SocialIcon
                    light
                    raised={false}
                    type='medium'
                />

                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />

                <SocialIcon
                    title='Some Twitter Message'
                    button
                    type='twitter'
                />

                <SocialIcon
                    button
                    type='medium'
                />

                <SocialIcon
                    button
                    light
                    type='instagram'
                />
            </View>
        )
    }
}
