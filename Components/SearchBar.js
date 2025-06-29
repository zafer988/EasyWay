import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchBarStyle from './SearchBarStyle';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        onSearch(search)
    }
    return (
        <SafeAreaView style={SearchBarStyle.container}>
            <TextInput
                placeholder="Search"
                style={SearchBarStyle.input}
                value={search}
                onChangeText={setSearch}
            />
            <TouchableOpacity style={SearchBarStyle.button} onPress={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="#247BC7" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SearchBar;
