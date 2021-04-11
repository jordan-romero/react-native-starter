import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  const greeting2 = <Text>Hello to you!</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
      <Text>{greeting}</Text>
      {greeting2}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: '#ff0000',
  },
});

export default ComponentsScreen;
