import ProfilEkrani from './ProfilEkrani';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Henüz sayfaları oluşturmadığımız için şimdilik boş bırakıyoruz
const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Buraya ilerde sayfalarımızı ekleyeceğiz */}
            </<Stack.Screen name="Profil" component={ProfilEkrani} />>
        </NavigationContainer>
    );
};

export default MainStack;