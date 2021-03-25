import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

import Screen from '../components/Screen'

export default function MarsScreen() {
    return (
        <>
        <ImageBackground 
            resizeMode="cover"
            source={require("../assets/mars-insight.jpeg")}
            style={styles.background}
        >
            <View style={styles.view}>
                <Text style={styles.title}>El Planeta Rojo</Text>
            </View>
        </ImageBackground>
        <View style={styles.bottom}>
            <Text style={styles.text}>
                Mars, often referred to as The Red Planet (El Planeta Rojo in Spanish),
                is the fourth planet in The Solar System.
            </Text>
            <Text style={styles.title}>
                Moons
            </Text>
            <Text style={styles.text}>
                Phobos Deimos
            </Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "repeat",
        flex: 1,
    },
    view: {
        flex: 1,
    },
    bottom: {
        flex: 3,
        // backgroundColor: 'rgb(153, 97, 65)',
        backgroundColor: 'brown',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginTop: 75
    },
    text: {
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    }
})