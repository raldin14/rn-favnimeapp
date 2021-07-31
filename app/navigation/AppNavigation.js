import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import SplashScreen from '@screens/SplashScreen';
import MainScreen from '@screens/MainScreen';

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
                    component ={MainScreen}
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