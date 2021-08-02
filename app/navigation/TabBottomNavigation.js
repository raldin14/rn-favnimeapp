import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '@screens/MainScreen';
import AnimeScreen from '@screens/AnimeScreen';
import Favorites from '@screens/Favorites';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
MaterialCommunityIcons.loadFont();

const TabBottomNavigation = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent: "center",
                    paddingVertical: 15,
                    backgroundColor: "#00a46c",
                    elevation: 2
                }
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color, size}) => {
                        <Feather name="home" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="AnimeScreen"
                component={AnimeScreen}
                options={{
                    tabBarLabel:"Anime",
                    tabBarIcon:({color, size}) => {
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel:"Faorite",
                    tabBarIcon:({color, size}) => {
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBottomNavigation;