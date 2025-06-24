import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import MapView from 'react-native-maps'
import Searchbar from '../Components/SearchBar'
const AccessibilityMapScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}>
                <Searchbar onSearch={(text) => console.log(text)} />
            </MapView>
        </SafeAreaView>
    )
}

export default AccessibilityMapScreen