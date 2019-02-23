import React, { Component } from 'react';
import { Rating } from 'react-native-elements'
import {View} from 'react-native'

export default class Rating1 extends Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <View>
                <Rating
                    showRating
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />

                <Rating
                    showRating
                    type="star"
                    fractions={1}
                    startingValue={3.6}
                    readonly
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />

                <Rating
                    type="heart"
                    ratingCount={3}
                    fractions={2}
                    startingValue={1.57}
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    showRating
                    style={{ paddingVertical: 10 }}
                />


                <Rating
                    type='custom'
                    ratingImage={WATER_IMAGE}
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={10}
                    imageSize={30}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />
                <Rating
                    imageSize={20}
                    readonly
                    startingValue={rating}
                    style={ styles.rating }
                />
                <Rating showRating fractions={1} startingValue={3.3} />

            </View>
        )
    }
}
const WATER_IMAGE = { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }
const { rating } = this;
