import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

const OVERPASS_API_URL = Constants.expoConfig.extra.OVERPASS_API_URL;

const useFetch = () => {
    const [location, setLocation] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAll = async () => {
        try {
            setLoading(true);
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Location permission not granted.');
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);

            const lat = loc.coords.latitude;
            const lon = loc.coords.longitude;

            const latDelta = 0.005;
            const lonDelta = 0.005;

            const bbox = `${lat - latDelta},${lon - lonDelta},${lat + latDelta},${lon + lonDelta}`;

            const query =
                `[out:json][timeout:25];(way["highway"]["wheelchair"="yes"](${bbox}););out body;>;out skel qt;`;
            const response = await axios.post(
                OVERPASS_API_URL,
                new URLSearchParams({ data: query }).toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            const elements = response.data.elements;
            const nodes = {};
            elements.forEach((el) => {
                if (el.type === 'node') {
                    nodes[el.id] = {
                        latitude: el.lat,
                        longitude: el.lon,
                    };
                }
            });
            const ways = elements.filter((el) => el.type === "way")
            const polylines = ways.map((way) => {
                const coordinates = way.nodes.map((nodeId) => nodes[nodeId]).filter(Boolean);

                return {
                    wayId: way.id,
                    coordinates: coordinates,
                }
            });
            setData(polylines);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAll();
    }, []);

    return {
        location,
        data,
        loading,
        error,
    };
};

export default useFetch;
