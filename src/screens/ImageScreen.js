import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title='Forest'
        image={require('../../assets/forest.jpg')}
        score={9}
      />
      <ImageDetails
        title='Beach'
        image={require('../../assets/beach.jpg')}
        score={7}
      />
      <ImageDetails
        title='Mountain'
        image={require('../../assets/mountain.jpg')}
        score={7}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
