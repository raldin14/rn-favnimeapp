import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';

import personalData from '@assets/data/personalData';
import workinfoData from '@assets/data/workinfoData';
import Colors from '@styles/color';

const AnimeDetail = ({navigation, route}) => {

    const {item} = route.params;
    console.log(item)

    const saveFavorite = async () => {
        await AsyncStorage.setItem('@favorite_anime', JSON.stringify(item));
        alert("Added to favorites");
    }

    return(
        <View style={styles.container}>
            {/*Head section*/}
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
                        <Image
                            source={{uri:item.attributes.posterImage.small}}
                            style={styles.profilePict}
                        />
                    </View>
                </View>
                <View  style={styles.infoContainer}>
                    <View style={{width: "40%"}}>                       
                        <Text style={styles.subTitle}>Age Rating: {item.attributes.ageRating}</Text>
                    </View>
                    <View  style={{width: "60%"}}>
                        <TouchableOpacity onPress={saveFavorite}>
                            <View style={styles.buttonAdd} >
                                <Text style={styles.buttonText}>Add Favorite</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/**Detail section */}
            <View style={styles.detailContainer}>
                
            
                <View style={styles.detailInformationSection}>
                    <View  style={styles.detailInformationImage}>
                        <Image source={{uri:item.attributes.posterImage.original}} style={styles.animePosterIamge}/>
                    </View>
                    <View  style={styles.detailInformationTexts}>
                        <Text>Popularity Rank: {item.attributes.popularityRank}</Text>
                        <Text>Rating Rank: {item.attributes.ratingRank}</Text>
                        <Text>Total Episodes: {item.attributes.episodeCount}</Text>
                        <Text>Episode Length: {item.attributes.episodeLength}</Text>
                    </View>
                </View>
                <View>
                    <Image source={{uri:item.attributes.coverImage.original}} style={styles.animeCoverIamge}/>
                </View>
            </View>
        </View>
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