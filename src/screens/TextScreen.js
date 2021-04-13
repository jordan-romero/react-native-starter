import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
  let [name, setName] = useState('');
  const error = <Text>Password must be longer than 5 characters </Text>;
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      {name.length < 5 ? error : null}
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
