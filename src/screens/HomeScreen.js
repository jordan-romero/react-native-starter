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
      <Button
        title='Go to Counter Demo'
        onPress={() => {
          navigation.navigate('Counter');
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
      <Button
        title='Go to Image Screen'
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => {
          navigation.navigate('Color');
        }}
      />
      <Button
        title='Go to Square Screen'
        onPress={() => {
          navigation.navigate('Square');
        }}
      />
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
