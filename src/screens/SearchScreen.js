import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';



const SearchScreen = () => {
    const [results, setResults] = useState([]);
    const [term, setTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try{
        const response = await yelp.get('/search',{
            params:{
                limit: 30,
                term,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }catch(err){
        setErrorMessage('Something went wrong!');
    }
}

    return (
      <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={searchApi}
            />
        <Text>{errorMessage}</Text>
        <Text>We have found {results.length} results.</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  
});


export default SearchScreen; 