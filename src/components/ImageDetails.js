import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetails = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({});
