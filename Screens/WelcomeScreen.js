import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './WelcomeScreenStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Components/ButtonComponent';
import Colors from '../Components/Colors';
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {

    const navigation = useNavigation()
    const goToMap = () => {
        navigation.navigate('AccessibilityMap')
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>WELCOME TO EASYWAY</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesomeIcon icon={faWheelchair} size={70} color={Colors.primary} />
                </View>
            </SafeAreaView>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>
                    There’s always a way. Let’s find yours.
                </Text>
                <ButtonComponent onpress={() => goToMap()} title='Get Started' />
            </View>
        </>
    );
};

export default WelcomeScreen;
