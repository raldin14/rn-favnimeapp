import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, TextInput, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '@styles/color';
import GlobalStyles from '@styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBox from '@component/SearchBox';

const AnimeScreen = ({navigation}) => {

    const animePath = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=0";

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dataLink, setDataLink] = useState('https://kitsu.io/api/edge/anime');
    const [dataSearch, setDataSearch] = useState('https://kitsu.io/api/edge/anime?filter[text]=');

    const getAnime = async () => {
        try {
            const response = await fetch(dataLink);
            const json = await response.json();
            const animeData = [...data, ...json.data]
            setData(animeData);
            setDataLink(json.links.next);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }        
    }

    const searchAnime = async (text) => {        
        if(text !== ''){
            try {
                const response = await fetch(dataSearch+text);
                const json = await response.json();
                const animeData = [...json.data]
                setData(json.data);
                //setDataLink(json.links.next);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
            console.log('search');
            console.log(data);
        }else{
            setDataLink(animePath);
            setData([]);
            console.log('buscar');
            console.log(data);
            console.log(dataLink);
            getAnime();
        }
    }
    useEffect(() =>{        
        getAnime();
       console.log(dataLink);
    },[]);

    const renderAnimeItem = ({item}) => {
        return(
            <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('AnimeDetail', {
                    item: item
                })}
            >
                <View style={GlobalStyles.cards}>
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
        <SafeAreaView style={GlobalStyles.safeArea}>
            {/*Head section*/}
            <View style={GlobalStyles.detailHeader}>
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()}/>
                <Text style={{fontSize: 20, fontWeight:'bold'}}>Anime</Text>
            </View>
            {/**Search */}
            <View style={GlobalStyles.searchBox}>
                <View style={GlobalStyles.inputContainer}>
                    <Icon name='search' size={28}/>
                    <TextInput style={GlobalStyles.searchInput} placeholder="Search" onChangeText ={(text) => searchAnime(text)} /> 
                </View>
            </View>
            
            {/**Fetching the animes */}
            {
                isLoading ? <ActivityIndicator
                    animating size={30}
                /> : 
                <FlatList
                    data={data}
                    keyExtractor = {({id}, index) => id}
                    renderItem = {renderAnimeItem}
                    onEndReached={getAnime}
                    onEndReachedThreshold={0}   
                    contentContainerStyle={{paddingBottom: 80}}                 
                    showsVerticalScrollIndicator = {false}
                />
            }
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