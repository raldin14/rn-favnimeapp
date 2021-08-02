import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, TextInput, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const AnimeScreen = ({navigation}) => {

    const animePath = 'https://kitsu.io/api/edge/anime';

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getAnime = async () => {
        try {
            const response = await fetch(animePath);
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
    },[]);

    const renderAnimeItem = ({item}) => {
        return(
            <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('AnimeDetail', {
                    item: item
                })}
            >
                <View style={[styles.animeitemcontainer]}>
                    <View>
                        <View  style={styles.animeitemsection}>
                            <View style={styles.animeIamgeSection} >
                                <Image source={{uri:item.attributes.posterImage.small}} style={styles.animeIamge} />
                            </View>
                            <View style={styles.animeInformationsection} >
                                <Text  style={styles.animeTitle} >{item.attributes.titles.en_jp}</Text>
                                <Text  style={styles.animeTitle} >{item.type}</Text>
                                <Text  style={styles.animeTitle} >Total Episodes: {item.attributes.episodeCount}</Text>
                            </View>
                        </View>
                    </View>           
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            {/*Head section*/}
            <View style={styles.headerStyle}>
                <Image  style={styles.menuIcon}
                    source={require('@resource/images/1.png')}
                />
          
            </View>
            {/**Search */}
            <View style={styles.searchContainer}>
                <Feather name="search" size={16} color={'#000'}/>
                <View style={styles.search}>
                    <TextInput style={styles.searchInput} placeholder="search"/>
                </View>
            </View>
            {/**Fetching the animes */}
            {
                isLoading ? <ActivityIndicator/> : 
                <FlatList
                    data={data}
                    keyExtractor = {({id}, index) => id}
                    renderItem = {renderAnimeItem}
                    showsVerticalScrollIndicator = {false}
                />
            }
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
        height: "15%",
        paddingHorizontal: 20
    },    
    menuIcon:{
        //height: 10,
       // width: 20,
        marginTop: 50
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 5
    },
    search: {
        flex:1,
        marginLeft: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },
    searchInput: {
        fontSize: 14,
        marginBottom: 5,
        color: '#000'
    },
    animeitemcontainer:{
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: "#FFF",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    animeitemsection:{
        flexDirection: 'row',
        paddingBottom: 20
    },
    animeIamge:{
        width: 60,
        height: 60
    },
    animeIamgeSection:{
        marginTop: 20,
        marginLeft: 20
    },
    animeInformationsection:{
        marginTop:20,
        marginLeft:20
    },
    animeTitle:{
        fontWeight: 'bold',
        fontSize: 15
    },
})
export default AnimeScreen;