import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        Welcome to my first React-Native App!
      </Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          console.log('button pressed');
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('list pressed');
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  buttonStyle: {},
});

export default HomeScreen;
