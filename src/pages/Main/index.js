import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Principal from '../Principal';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator 
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Principal') {
                            iconName = 'home';
                        } else if (route.name === 'Perfil') {
                            iconName = 'user';
                        }
                    
                        return <Feather name={iconName} size={size} color={color} />
                    }
                })
            }
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Principal" component={Principal} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    );
}