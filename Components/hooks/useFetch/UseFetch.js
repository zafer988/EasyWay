import React, { useEffect } from 'react'
import { Alert } from 'react-native';
import { useState } from 'react';
import * as Location from 'expo-location';

import Constants from 'expo-constants';

const OVERPASS_API_URL = Constants.expoConfig.extra.OVERPASS_API_URL;

const useFetch = () => {
    const [location, setLocation] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAll = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
            }
            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords)
        }
        catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }


    }


    useEffect(() => {
        fetchAll()
    }, [])

    return {
        location,
        data,
        loading,
        error
    }

}




export default useFetch