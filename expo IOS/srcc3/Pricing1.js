import React, { Component } from 'react';
import { PricingCard } from 'react-native-elements'

export default class Pricing1 extends Component {
    render() {
        return (
            <PricingCard
                color='#4f9deb'
                title='Free'
                price='$0'
                info={['1 User', 'Basic Support', 'All Core Features']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
            />
        )
    }
}
