import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Michelle' },
    { name: 'Blake' },
    { name: 'Tracie' },
    { name: 'Syd' },
    { name: 'Meks' },
    { name: 'Shannon' },
    { name: 'Janna' },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
