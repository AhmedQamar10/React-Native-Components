import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Myweb3 extends Component
{
    onLoad()
    {
        console.log('Loading webview');
    }
    checkUrl(event)
    {
        if(event.url !='https://github.com/facebook/react-native')
        {
            this.webview.stopLoading()
        }
    }
  render() {
    return (
      <WebView 
        ref={(ref)=>{this.webview=ref;}}
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
        onLoad={this.onLoad}
        javaScriptEnabled={true}
        automaticallyAdjustContentInsets={false}
        domStorageEnabled={true}
        startInLoadingState={true}
        //onNavigationStateChange={(event)=>{console.log(event)}}
        onNavigationStateChange={(event)=>{this.checkUrl(event)}}

      />
    );
  }
}