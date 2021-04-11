import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the ComponentsScreen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: '#ff0000',
  },
});

export default ComponentsScreen;
