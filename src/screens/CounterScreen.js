import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const COUNT_INCREMENT = 1;

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase', payload: COUNT_INCREMENT });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease', payload: COUNT_INCREMENT });
        }}
      />
      <Text>Current Count: {state.count} </Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
