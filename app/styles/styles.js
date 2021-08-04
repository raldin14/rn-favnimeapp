import {StyleSheet} from 'react-native';
import Colors from './color';

const GlobalStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.white,
        resizeMode: 'contain'
    },
    TabSearchAnime:{
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 30,
        top: -20,
        elevation: 5
    },
    safeArea:{
        flex:1,
        backgroundColor: Colors.white
    },
    profileHeader:{
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    profileTitleWrapper:{
        flexDirection: 'row'
    },
    profileTitle:{
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10
    },
    profileSubTitle:{
        marginTop: 5,
        fontSize: 22,
        color: Colors.grey,
        marginLeft: 10
    },
    profilePict:{
        height: 80,
        width:80,
        borderRadius: 100,        
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:5,
        width:"100%",
        marginLeft: 15
    },
    searchBox: {
        marginTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    inputContainer: {
        flex: 1,
        height: 60,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: Colors.light,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    searchInput:{
        flex: 1,
        fontSize: 18
    }, 
    skillscontainer:{
        marginTop: 15
    },
    skillstitle:{
        fontSize: 25,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    skillsListcontainer:{
        paddingTop: 15,
        paddingBottom: 20,
    },
    skillsitemcontainer:{
        backgroundColor: Colors.primary,
        marginRight: 20,
        borderRadius: 20,
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    skillsitemimage:{
        width: 60,
        height: 60,
        alignSelf: "center",
        marginHorizontal: 20,
        resizeMode: "contain",
        marginBottom: 24
    },
    skillsitemtitle:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 24,
        color: Colors.white
    },
    detailHeader: {
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    AnimeImageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 280
    },
    animeImage:{
        height: 220,
        width: 220,
        resizeMode: 'contain'
    },
    detailSection:{
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: Colors.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    detailContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white
    },
    favBtnIcon:{
        backgroundColor: Colors.white,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    detailSynopsis:{
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,color: Colors.white
    },
    detailDatatext:{
        color: Colors.white
    },
    cards:{
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default GlobalStyles;