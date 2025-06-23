import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ButtonStyle';

const ButtonComponent = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Let’s Start</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;
