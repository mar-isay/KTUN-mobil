import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './LoginPage';
import ProfilEkrani from './ProfilEkrani';
import Duyurular from './Duyurular';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={LoginPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Profil" 
                    component={ProfilEkrani} 
                    options={{ title: 'Profilim' }}
                />
                <Stack.Screen 
                    name="Duyurular" 
                    component={Duyurular} 
                    options={{ title: 'Duyurular' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;