import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MarsScreen from '../screens/MarsScreen';
import RoverLandingScreen from '../screens/RoversLandingScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Mars"
                component={MarsScreen}
            />
            <Tab.Screen 
                name="Rovers"
                component={RoverLandingScreen}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})