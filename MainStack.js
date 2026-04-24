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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;