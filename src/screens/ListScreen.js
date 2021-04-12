import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Michelle', age: 30 },
    { name: 'Blake', age: 29 },
    { name: 'Tracie', age: 40 },
    { name: 'Syd', age: 21 },
    { name: 'Meks', age: 28 },
    { name: 'Shannon', age: 34 },
    { name: 'Janna', age: 27 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
