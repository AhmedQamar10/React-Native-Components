import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import { View } from 'react-native'

export default class Search1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    handleQueryChange = query =>
        this.setState(state => ({ ...state, query: query || "" }));

    handleSearchCancel = () => this.handleQueryChange("");
    handleSearchClear = () => this.handleQueryChange("");
    render() {
        return (
            <View>
                <SearchBar
                    onChangeText={this.handleQueryChange}
                    onCancel={this.handleSearchCancel}
                    onClearText={this.handleSearchClear}
                    placeholder='Type Here...' />

                <SearchBar
                    noIcon
                    onChangeText={this.handleQueryChange}
                    onCancel={this.handleSearchCancel}
                    onClearText={this.handleSearchClear}
                    placeholder='Type Here...' />

                <SearchBar
                    round
                    onChangeText={this.handleQueryChange}
                    onCancel={this.handleSearchCancel}
                    onClearText={this.handleSearchClear}
                    placeholder='Type Here...' />

                <SearchBar
                    lightTheme
                    onChangeText={this.handleQueryChange}
                    onCancel={this.handleSearchCancel}
                    onClearText={this.handleSearchClear}
                    placeholder='Type Here...' />

                <SearchBar
                    lightTheme
                    onChangeText={this.handleQueryChange}
                    onClearText={this.handleSearchClear}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' />
            </View>
        )
    }
}
