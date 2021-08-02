import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import SplashScreen from '@screens/SplashScreen';
import AnimeDetail from '@screens/AnimeDetail';
import TabBottomNavigation from './TabBottomNavigation';

const Stack = createStackNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = "SplashScreen"
                    component ={SplashScreen}
                    options = {{
                        headerShown : false
                    }}
                />
                <Stack.Screen
                    name = "MainScreen"
                    component ={TabBottomNavigation}
                    options = {{
                        headerShown : false
                    }}
                />
                <Stack.Screen
                    name = "AnimeDetail"
                    component ={AnimeDetail}
                    options = {{
                        headerShown : false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

/*const AppNavigation = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    MainScreen:{
        screen: MainScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
});*/

export default AppNavigation;// createAppContainer(AppNavigation);