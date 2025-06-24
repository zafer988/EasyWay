import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ButtonStyle';

const ButtonComponent = ({ onpress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onpress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;
