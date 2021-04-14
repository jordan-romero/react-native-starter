import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'orange',
    height: 100,
    width: 100,
    position: 'absolute',
    top: 100,
    left: 150,
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
});
