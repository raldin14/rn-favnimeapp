import React from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '@screens/MainScreen';
import AnimeScreen from '@screens/AnimeScreen';
import Favorites from '@screens/Favorites';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '@styles/color';
import GlobalStyles from '@styles/styles';

const Tab = createBottomTabNavigator();
MaterialCommunityIcons.loadFont();

const TabBottomNavigation = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:55,
                    borderTopWidth: 0,
                    //justifyContent: "center",
                    //paddingVertical: 15,
                    //backgroundColor: "#00a46c",
                    elevation: 0
                },
                showLabel: false,
                activeTintColor: Colors.primary,
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color}) => (
                        <Icon name="home-filled" color={color} size={28}/>
                    )
                }}
            />
            <Tab.Screen
                name="AnimeScreen"
                component={AnimeScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <View style={GlobalStyles.TabSearchAnime}>
                            <Icon name="search" color={Colors.primary} size={28}/>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon:({color}) => (
                        <Icon name="favorite" color={color} size={28}/>                        
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBottomNavigation;