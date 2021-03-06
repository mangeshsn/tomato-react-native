import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';
import FoodCard from './FoodCard';
const ResultsList = ({ title, results }) => {
    return <View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={
                ({ item }) => {
                    return <FoodCard result={item}/>
                }
            }
        />
    </View>
};

const styles = StyleSheet.create({
title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
}

});

export default ResultsList;