import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import MapView from 'react-native-maps'
import Searchbar from '../Components/SearchBar'
import useFetch from '../Components/hooks/useFetch/useFetch'

const AccessibilityMapScreen = () => {
    const { location, data, loading, error } = useFetch();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}>
                <Searchbar onSearch={(text) => console.log(text)} />
            </MapView>

            {location && (
                <View style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    backgroundColor: 'white',
                    padding: 10,
                    zIndex: 999
                }}>
                </View>
            )}
        </SafeAreaView>
    );

}

export default AccessibilityMapScreen