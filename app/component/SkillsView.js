import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import personalData from '@assets/data/personalData';
import workinfoData from '@assets/data/workinfoData';
import Colors from '@styles/color';
import GlobalStyles from '@styles/styles';

const SkillsView = ({data}) => {
    const renderSkillsItem = ({item}) => {
        return(
            <View style={[GlobalStyles.skillsitemcontainer,{
                marginLeft: item.id == 1 ? 20 : 0
            }]}>
                <Text style={GlobalStyles.skillsitemtitle}>{item.skillname}</Text>
                <Image style={GlobalStyles.skillsitemimage} source={item.image}/>
            </View>
        )
    }

    return(
        <View style={GlobalStyles.skillscontainer}>
            <Text style={GlobalStyles.skillstitle}>Skills</Text>
            <View style={GlobalStyles.skillsListcontainer}>
                <FlatList
                    key={data.id}
                    data={data}
                    renderItem={renderSkillsItem}
                    keyExtractor={item => data.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default SkillsView;