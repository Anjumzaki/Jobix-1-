import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First3 from '../screens/First3';
import LoginWorker from '../screens/LoginWorker';
import ForgotPassword from '../screens/ForgotPassword'
import Dashboard from '../screens/Dashboard'
import Message from '../screens/Message'
import Chat from '../screens/Chat'
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

const headerBackground = () => (
    <LinearGradient
      colors={["#df3bb0", "#8000FF"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  )

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
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null',
                            headerTitleAlign: 'center'
                          }}    
                    />
                    <Stack.Screen name="Message" 
                        component={Message}
                        options={{
                            title: 'Message List',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null',
                            headerTitleAlign: 'center'
                          }}    
                    />
                    <Stack.Screen name="Chat" 
                        component={Chat}
                        options={{
                            title: '',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null'
                          }}    
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}