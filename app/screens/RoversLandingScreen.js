import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import marsInfo from '../../mars.json';
const { rovers } = marsInfo;

export default function RoversLandingScreen() {
    return (
        <Screen style={styles.container}>
            <Text>{rovers.map(m => m)}</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})