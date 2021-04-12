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
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
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
