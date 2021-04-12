import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.textStyle}>
        Welcome to my first React-Native App!
      </Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          navigation.navigate('Components');
        }}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('List');
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
  buttonStyle: {
    backgroundColor: 'red',
    height: 40,
  },
});

export default HomeScreen;
