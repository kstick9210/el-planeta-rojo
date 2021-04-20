import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '@mdi/react';
// import { Icon } from 'react-native-elements';
import { MdiRobotHappyOutline } from '@mdi/js';
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
                // options={{
                //     tabBarIcon: () => (
                //         <Icon 
                //             name="globe-europe"
                //             type="font-awesome-5"
                //         />
                //     )
                // }}
            />
            <Tab.Screen 
                name="Rovers"
                component={RoverLandingScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            path={MdiRobotHappyOutline}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})