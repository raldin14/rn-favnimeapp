import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const MainScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Image  style={styles.menuIcon}
                    source={require('@resource/images/1.png')}
                />
                <View  style={styles.infoContainer}>
                    <View style={{width: "70%"}}>
                        <Text style={styles.nameText}>Raldin D. Hidalgo</Text>                        
                        <Text style={styles.subTitle}>Computer Scientist</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('@resource/images/raldin.jpg')}
                            style={styles.profilePict}
                        />
                    </View>
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
        height: "28%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },
    menuIcon:{
        height: 10,
        width: 20,
        marginTop: 50
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:25,
        width:"100%"
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
    }
})
export default MainScreen;