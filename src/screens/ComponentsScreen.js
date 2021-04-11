import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  const greeting2 = <Text>Hello to you!</Text>;
  const name = 'Jordan';

  return (
    <View>
      <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
      <Text>{greeting}</Text>
      {greeting2}

      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: '#ff0000',
  },
  headerStyle: {
    fontSize: 45,
    color: 'blue',
  },
  subHeaderStyle: {
    fontSize: 20,
    color: 'teal',
  },
});

export default ComponentsScreen;
