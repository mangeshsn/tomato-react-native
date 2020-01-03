import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
    return (
      <View style={styles.background}>
        <Feather name="search" size={30} />
        <SearchBar />
      </View>
    );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});


export default SearchScreen; 