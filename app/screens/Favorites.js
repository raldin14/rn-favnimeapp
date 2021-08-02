import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorites = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getAnime = async () => {
        try {
            const response = await AsyncStorage.getItem('@favorite_anime');
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        
    }

    useEffect(() =>{        
        getAnime();
        console.log(data);
    },[]);

    return(
        <Text>Favorites Screen</Text>
    )
}

export default Favorites;