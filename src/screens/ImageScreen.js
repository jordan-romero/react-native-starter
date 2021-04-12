import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title='Forest' image={require('../../assets/forest.jpg')} />
      <ImageDetails title='Beach' image={require('../../assets/beach.jpg')} />
      <ImageDetails
        title='Mountain'
        image={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
