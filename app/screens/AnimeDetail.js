import React, {useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View, Image, Linking, FlatList, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@styles/color';
import GlobalStyles from '@styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimeDetail = ({navigation, route}) => {
    
    const [youtubeID, setYoutubeID] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const {item} = route.params;
    const youtubeLink = 'https://www.youtube.com/watch?v=';
    console.log(item)

    const saveFavorite = async () => {
        await AsyncStorage.setItem('@favorite_anime', JSON.stringify(item));
        setIsFavorite(true);
        alert("Added to favorites");
    }

    const redirectTo = () => {
        setYoutubeID(item.attributes.youtubeVideoId);
        Linking.openURL(youtubeLink+youtubeID).catch(err =>
            console.error('An error occurred', err)
          );
    }

    return(
        <SafeAreaView style={{backgroundColor: Colors.white}}>
            <View style={GlobalStyles.detailHeader}>
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()}/>
                <Text style={{fontSize: 20, fontWeight:'bold'}}>Anime Detail</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={GlobalStyles.AnimeImageContainer}>
                    
                    {item.attributes.posterImage.small != null ? <Image
                            source={{uri:item.attributes.posterImage.original}}
                            style={GlobalStyles.animeImage}
                        /> :<Image
                        source={require('@resource/images/logo.png')}
                        style={GlobalStyles.animeImage}
                    />}
                </View>
                <View style={GlobalStyles.detailSection}>
                    <View style={GlobalStyles.detailContent}>
                        <Text style={GlobalStyles.detailTitle}>{item.attributes.titles.en_jp}</Text>
                        <View style={GlobalStyles.favBtnIcon}>
                            <TouchableOpacity onPress={() => saveFavorite}>
                                <Icon name='favorite-border' color={isFavorite == true ? Colors.primary : Colors.grey} size={25}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={GlobalStyles.detailContent}>
                        <Text style={GlobalStyles.detailDatatext}>Popularity Rank: {item.attributes.popularityRank}</Text>                        
                        <Text style={GlobalStyles.detailDatatext}>Total Episodes: {item.attributes.episodeCount}</Text>
                    </View>
                    <View style={GlobalStyles.detailContent}>
                        <Text style={GlobalStyles.detailDatatext}>Rating Rank: {item.attributes.ratingRank}</Text>
                        <Text style={GlobalStyles.detailDatatext}>Episode Length: {item.attributes.episodeLength}</Text>
                    </View>
                    <TouchableOpacity onPress={redirectTo(item.attributes.youtubeVideoId)}>
                        <MaterialCommunityIcons name="youtube" size={45} color={Colors.red}/>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.detailSynopsis}>{item.attributes.synopsis}</Text>
                </View>                
            </ScrollView>
        </SafeAreaView>
    )
}

export default AnimeDetail;