import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import FoodCard from "../components/FoodCard";
import { ListItem } from 'native-base';
const Home = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMessage}</Text>
      <ScrollView>
        <ListItem itemDivider>
          <Text style={styles.title}>Cost Effective</Text>
        </ListItem>
        <ResultsList results={filterResultsByPrice("$")} />

        <ListItem itemDivider>
          <Text style={styles.title}>Bit pricier</Text>
        </ListItem>
        <ResultsList results={filterResultsByPrice("$$")} />

        <ListItem itemDivider>
          <Text style={styles.title}>Big Spender</Text>
        </ListItem>
        <ResultsList results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10
  },
  title:{
      fontSize: 19,
      fontWeight: 'bold'
  }
});

export default Home;
