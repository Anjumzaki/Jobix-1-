import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First3 from '../screens/First3';
import LoginWorker from '../screens/LoginWorker';
import ForgotPassword from '../screens/ForgotPassword'
import Dashboard from '../screens/Dashboard'
import Message from '../screens/Message'
import {View, StyleSheet} from 'react-native'

const Stack = createStackNavigator();

export default (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="First3" 
                        component={First3}
                        options={{ headerShown: false }}
                    />   
                    <Stack.Screen name="LoginWorker" 
                        component={LoginWorker}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="ForgotPassword" 
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Dashboard" 
                        component={Dashboard}
                        options={{
                            title: 'Tableau de bord',
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                          }}    
                    />
                    <Stack.Screen name="Message" 
                        component={Message}
                        options={{
                            title: 'Message List',
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                          }}    
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}