import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import personalData from '@assets/data/personalData';
import workinfoData from '@assets/data/workinfoData';
import Colors from '@styles/color';
import GlobalStyles from '@styles/styles';
import SkillsView from '@component/SkillsView';

Feather.loadFont();

const MainScreen = () => {

    const [age, setAge] = useState('');
    useEffect(() => {
        getAge();
    },[]);

    const getAge = () => {
        let birth = new Date(personalData[0].birthdate);
        let today = new Date();
        let year = today.getFullYear() - birth.getFullYear();
        let month = today.getMonth() - birth.getMonth();

        if(month < 0 || (month === 0 && today.getDate() < birth.getDate())){
            year--;
        }        
        setAge(year);
    }
    
    return(
        <SafeAreaView style={GlobalStyles.safeArea}>
            {/*Head section*/}
            <View style={GlobalStyles.profileHeader}>
                <View>
                    <View style={GlobalStyles.profileTitleWrapper}>
                        <Text style={GlobalStyles.profileTitle}>{personalData[0].name}</Text>
                    </View>
                    <Text style={GlobalStyles.profileSubTitle}>{workinfoData[0].position}</Text>
                </View>
                <Image
                            source={personalData[0].picture}
                            style={GlobalStyles.profilePict}
                        />
            </View>
            <View  style={GlobalStyles.infoContainer}>
                <View style={{width: "20%"}}>                       
                    <Text style={GlobalStyles.profileSubTitle}>Age: {age}</Text>
                </View>
                <View  style={{width: "80%"}}>
                    <Text style={GlobalStyles.profileSubTitle}>From: {personalData[0].country}</Text>
                </View>
            </View>
            <ScrollView contentInsetAdjustmentBehavior = "automatic" showsVerticalScrollIndicator= {false}>
                {/**Skills */}
                <SkillsView data={personalData[0].skills}/>
                <View style={styles.workinfocontainer}>
                    <Text style={styles.workintitle}>Work Information</Text>
                    {
                        workinfoData.map((item) => (                        
                            <View
                                key={item.id}
                                style={[styles.workinfoitemcontainer, {
                                marginTop: item.id == 1 ? 10 : 20,
                            }]}>
                                <View>
                                    <View>
                                        <View style={styles.companyname}>
                                            <Text style={styles.workinfocompany}>{item.company}</Text>
                                            <Text style={styles.workinfocompany}>{item.position}</Text>
                                        </View>
                                        <View>                                        
                                            <Text style={styles.workinfocompany}>{item.description}</Text>
                                        </View>
                                        <View style={styles.workinfodates}>
                                            <Text  style={styles.workinfodateStarted}>Started: {item.dateStarted}</Text>
                                            {item.currently == true ? <Text  style={styles.workinfodateEnded}>Currently</Text> : <Text  style={styles.workinfodateEnded}>Ended: {item.dateEnded}</Text>}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
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
        height: "30%",
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
        marginTop:25,
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
    skillscontainer:{
        marginTop: 15
    },
    skillstitle:{
        fontSize: 20,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    skillsListcontainer:{
        paddingTop: 15,
        paddingBottom: 20,
    },
    skillsitemcontainer:{
        backgroundColor: "#0096AF",
        marginRight: 20,
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
    workinfocontainer: {
        paddingHorizontal: 20
    },
    workintitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    workinfoitemcontainer: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    companyname:{
        marginBottom: 20
        //flexDirection: 'row',
        //alignItems: 'center'
    },
    workinfocompany: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.white
    },
    workinfoposition: {
        marginTop: 5
    },
    workinfodates: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:15,
        width:"100%",
        marginBottom: 20
    },
    workinfodateStarted: {
        width: "50%",
        color: Colors.white,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    workinfodateEnded: {
        alignItems: "flex-end",
        width: "50%",
        color: Colors.white,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
})
export default MainScreen;