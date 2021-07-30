import {createAppContainer}  from 'react-navigation';
import {createStackNavigator}  from 'react-navigation-stack';
import SplashScreen from '@screens/SplashScreen';
import MainScreen from '@screens/MainScreen';

const AppNavigation = createStackNavigator({
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
});

export default createAppContainer(AppNavigation);