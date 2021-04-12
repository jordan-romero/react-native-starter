import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Michelle', key: '1' },
    { name: 'Blake', key: '2' },
    { name: 'Tracie', key: '3' },
    { name: 'Syd', key: '4' },
    { name: 'Meks', key: '5' },
    { name: 'Shannon', key: '6' },
    { name: 'Janna', key: '7' },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
