import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '@styles/styles';
const SearchBox = () =>{
    return (
        <View style={GlobalStyles.searchBox}>
            <View style={GlobalStyles.inputContainer}>
                <Icon name='search' size={28}/>
                <TextInput style={GlobalStyles.searchInput} placeholder="Search"/>
            </View>
        </View>
    )
}

export default SearchBox;