import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreed(green - 1)}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
        color='Green'
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
