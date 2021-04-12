import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetails = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({});
