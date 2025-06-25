// Components/SearchBarStyle.js
import { StyleSheet } from 'react-native';
import Colors from '../Components/Colors';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 200,
        paddingVertical: 12,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        opacity: 0.9,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        margin: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
