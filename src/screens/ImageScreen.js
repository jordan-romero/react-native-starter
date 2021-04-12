import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title='Forest' />
      <ImageDetails title='Beach' />
      <ImageDetails title='Mountain' />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
