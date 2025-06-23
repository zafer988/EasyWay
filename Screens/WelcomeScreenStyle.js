import { StyleSheet } from 'react-native';
import Colors from '../Components/Colors';
import { main, titleText, textCenter, shadow } from '../Components/BaseStyle';

export default StyleSheet.create({
    container: {
        height: '65%',
        backgroundColor: Colors.primary,
        paddingTop: 60,
        marginBottom: 30,
        borderRadius: 30,
        ...main,
    },

    textContainer: {
        ...main,
        marginBottom: 20,
    },

    title: {
        ...titleText,
        color: Colors.white,
        ...textCenter,
    },

    subtitleContainer: {
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 20,
    },

    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.primary,
        ...textCenter,
        lineHeight: 26,
    },

    icon: {
        backgroundColor: Colors.white,
        borderRadius: 60,
        padding: 25,
        marginTop: 30,
        ...shadow,
    },
});
