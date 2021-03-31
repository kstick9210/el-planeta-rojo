import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function RoverButton({ rover }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{rover}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'darkred',
        borderRadius: 25,
        height: 110,
        justifyContent: 'center',
        margin: 5,
        paddingHorizontal: 5,
        width: 110,
    },
    text: {
        color: 'whitesmoke',
        textAlign: 'center'
    }
})