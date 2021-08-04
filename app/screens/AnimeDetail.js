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
            {/*Head section}
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={13} color ={Colors.white} style={styles.menuIcon}
                        source={require('@resource/images/1.png')}
                    />
                </TouchableOpacity>
                <View  style={styles.infoContainer}>
                    <View style={{width: "70%"}}>
                        <Text style={styles.nameText}>{item.attributes.titles.en_jp}</Text>                        
                        <Text style={styles.subTitle}>{item.type}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        {item.attributes.posterImage.small != null ? <Image
                            source={{uri:item.attributes.posterImage.small}}
                            style={styles.profilePict}
                        /> :<Image
                        source={require('@resource/images/logo.png')}
                        style={styles.profilePict}
                    />}
                    </View>
                </View>
                <View  style={styles.infoContainer}>
                    <View style={{width: "40%"}}>                       
                        <Text style={styles.subTitle}>Age Rating: {item.attributes.ageRating}</Text>
                    </View>
                    <View  style={{width: "60%"}}>
                        <TouchableOpacity onPress={() => saveFavorite}>
                            <View style={styles.buttonAdd} >
                                <Text style={styles.buttonText}>Add Favorite</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/**Detail section }
            <View style={styles.detailContainer}>
                
            
                <View style={styles.detailInformationSection}>
                    <View  style={styles.detailInformationImage}>
                        { item.attributes.posterImage.original != null ?
                            <Image source={{uri:item.attributes.posterImage.original}} style={styles.animePosterIamge}/>
                            : <Image
                            source={require('@resource/images/logo.png')}
                            style={styles.animePosterIamge}
                        />
                        }
                    </View>
                    <View  style={styles.detailInformationTexts}>
                        <Text>Popularity Rank: {item.attributes.popularityRank}</Text>
                        <Text>Rating Rank: {item.attributes.ratingRank}</Text>
                        <Text>Total Episodes: {item.attributes.episodeCount}</Text>
                        <Text>Episode Length: {item.attributes.episodeLength}</Text>
                        {/*<TouchableOpacity onPress={redirectTo(item.attributes.youtubeVideoId)}>
                            <Text>Youtube</Text>
                    </TouchableOpacity>}
                    </View>
                </View>
                <View>
                    {item.attributes.coverImage.original != null ?
                        <Image source={{uri:item.attributes.coverImage.original}} style={styles.animeCoverIamge}/>
                        : <Image
                        source={require('@resource/images/logo.png')}
                        style={styles.animeCoverIamge}
                    />
                    }
                </View>
            </View>*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#FFF"
    },
    headerStyle: {
        backgroundColor: "#00a46c",
        height: "32%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },
    menuIcon:{
        //height: 10,
       // width: 20,
        marginTop: 50
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:20,
        width:"100%",
    },
    nameText: {
        fontSize: 28,
        color:"#FFF",
        fontWeight: "bold"
    },
    imageContainer: {
        width: "30%",
        alignItems: "flex-end"
    },
    profilePict:{
        height: 80,
        width:80,
        borderRadius: 100,        
    },
    subTitle:{
        fontSize: 20,
        color:"#FFF",
        fontWeight: "bold"
    },
    buttonAdd:{
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 20
    },
    animeCoverIamge:{
        width: "100%",
        height: 150,
        resizeMode: 'contain'
    },
    detailContainer:{
        marginHorizontal: 20,
        marginTop: 0
    },
    detailInformationSection:{
        flexDirection: 'row'
    },
    detailInformationImage:{
        width: "50%"
    },
    detailInformationTexts:{
        width: "50%"
    },
    animePosterIamge:{
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    },
});

export default AnimeDetail;