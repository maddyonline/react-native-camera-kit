import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    AlertIOS,
    CameraRoll,
    Dimensions
} from 'react-native';

import {
    CameraKitGalleryView
} from 'react-native-camera-kit';

const size = Math.floor((Dimensions.get('window').width) / 3);
const innerSize = size - 6;

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

export default class GalleryScreenNative extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Done',
        id: 'navBarDone'
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      album: this.props.albumName,
    }
  }

  render() {
    return (
        <CameraKitGalleryView
            ref={(gallery) => {
                  this.gallery = gallery;
                }}
            style={{flex:1, margin: 0, backgroundColor: '#ffffff', marginTop: 50}}
            albumName={this.state.album}
            minimumInteritemSpacing={10}
            minimumLineSpacing={10}
            columnCount={3}
            onSelected={(result) => {

        }}
            fileTypeSupport={{
                      supportedFileTypes: ['image/png'],
                      unsupportedOverlayColor: "#00000055",
                      unsupportedImage: require('./images/unsupportedImage.png'),
                      //unsupportedText: 'JPEG!!',
                      unsupportedTextColor: '#ff0000'
          }}
        />
    )
  }
}

const styles = StyleSheet.create({});

