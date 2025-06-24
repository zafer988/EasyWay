// Components/SearchBarStyle.js
import { StyleSheet } from 'react-native';
import Colors from './Colors'; // Colors.js içinde tanımlıysa

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 200,
        paddingVertical: 12,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        margin: 10
    },
    button: {
        backgroundColor: Colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
