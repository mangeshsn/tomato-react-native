import React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Input
} from "native-base";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <Header style={styles.searchBackground} searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  );
};



const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  searchBackground: {
    backgroundColor: "#D74949",
 }
});

export default SearchBar;
