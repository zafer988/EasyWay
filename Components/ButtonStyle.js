import { StyleSheet } from 'react-native';
import Colors from './Colors';
export default StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        marginTop: 20,
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
