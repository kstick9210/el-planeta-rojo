import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import RoverButton from '../components/RoverButton';
import marsInfo from '../../mars.json';
const { rovers } = marsInfo;

export default function RoversLandingScreen() {
    return (
        <Screen style={styles.container}>
            <Text style={styles.title}>Mars Rovers and Landers</Text>
            <View style={styles.buttonWrap}>
                {rovers.map((rover, idx) => (
                    <RoverButton 
                        rover={rover} 
                        key={idx}
                    />
                ))}
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'sandybrown'
    },
    title: {
        fontSize: 30
    },
    buttonWrap: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 40
    }
})