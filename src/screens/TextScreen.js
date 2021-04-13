import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput style={styles.inputStyle} />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
