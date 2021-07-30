import {StyleSheet} from 'react-native';
import Colors from './color';

const imageBackGroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.WHITE,
        resizeMode: 'contain'
    }
});

export {imageBackGroundStyle}