import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';

import Screen from '../components/Screen'
import marsInfo from '../../mars.json'
const { earthVmars: { earth, mars } } = marsInfo

export default function MarsScreen() {
    return (
        <View style={styles.view}>
            <ScrollView 
                fadingEdgeLength={2}
            >
                <ImageBackground 
                    resizeMode="cover"
                    source={require("../assets/mars-insight.jpeg")}
                    style={styles.background}
                >
                    <View style={styles.view}>
                        <Text style={styles.header}>El Planeta Rojo</Text>
                    </View>
                </ImageBackground>
                <View style={styles.bottom}>
                    <Text style={styles.text}>
                        {marsInfo.summary}
                    </Text>
                    <Text style={styles.title}>
                        Moons
                    </Text>
                    <Text style={styles.text}>
                        {marsInfo.moons[0]}  {marsInfo.moons[1]}
                    </Text>
                    <Text style={styles.title}>
                        Earth vs Mars
                    </Text>
                    <Text style={styles.text}>
                        Average Temp{'\n'}
                        {earth.avgTemp[0]}  {mars.avgTemp[0]}{'\n'}
                        {earth.avgTemp[1]}  {mars.avgTemp[1]}{'\n'}{'\n'}
                        Earth Day  Mars Sol{'\n'}
                        {earth.day}   {mars.sol}{'\n'}{'\n'}
                        Year{'\n'}
                        {earth.year[0]}  {mars.year[0]}{'\n'}
                        {earth.year[1]}    {mars.year[1]}{'\n'}{'\n'}
                        Tallest Mountain{'\n'}
                        {earth.tallestMtn.name} {mars.tallestMtn.name}{'\n'}
                        {earth.tallestMtn.height} {mars.tallestMtn.height}{'\n'}{'\n'}
                        Deepest Canyon{'\n'}
                        {earth.deepestCanyon.name} {mars.deepestCanyon.name}{'\n'}
                        {earth.deepestCanyon.depth} {mars.deepestCanyon.depth}{'\n'}{'\n'}
                        Diameter{'\n'}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        // height: 20
        // flex: 2
    },
    bottom: {
        // flex: 3,
        // backgroundColor: 'rgb(153, 97, 65)',
        backgroundColor: 'brown',
        alignItems: 'center'
    },
    header: {
        color: 'white',
        fontSize: 30,
        marginTop: 45
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginTop: 35
    },
    text: {
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    },
    view: {
        flex: 1,
    }
})