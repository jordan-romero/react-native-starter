import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    alignItems: 'center',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    margin: 20,
  },
});
