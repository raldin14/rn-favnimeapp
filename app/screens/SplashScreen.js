import React, {useState, useEffect} from 'react';
import { View, StatusBar, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {imageBackGroundStyle} from '@styles/styles';

const SplashScreen = ({navigation}) => {

    const goToScreen = routeName => {
        navigation.navigate(routeName);
    }

    useEffect(() => {
        setTimeout(() => {
            goToScreen('MainScreen');
        }, 5000)
    },[]);

    return(
        <>
            <View style={imageBackGroundStyle.image}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100,
                    }}
                    source={require('@resource/images/logo.png')}
                />
            </View>
        </>
    )
}

export default SplashScreen;