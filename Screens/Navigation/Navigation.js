import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Login from '../Login/Login';
import Activity from '../Activity/Activity';
import Notification from '../Notification/Notification';
import Walking from '../ActivityScreens/Walking';
import HeartRate from '../ActivityScreens/HeartRate';
import Diet from '../ActivityScreens/Diet';
import Yoga from '../ActivityScreens/Yoga';
import Sleep from '../ActivityScreens/Sleep';
import Hydration from '../ActivityScreens/Hydration';
import Workout from '../ActivityScreens/Workout';
import Shop from '../Shop/Shop';
import Product from '../Shop/Product';
import Cart from '../Shop/Cart';
import Chatting from '../Chatting/Chatting';
import Cycling from '../ActivityScreens/Cycling';
import Profile from '../Profile/Profile';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <StatusBar style='auto' />
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
                <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />
                <Stack.Screen name='Walking' component={Walking} options={{ headerShown: false }} />
                <Stack.Screen name='HeartRate' component={HeartRate} options={{ headerShown: false }} />
                <Stack.Screen name='Diet' component={Diet} options={{ headerShown: false }} />
                <Stack.Screen name='Yoga' component={Yoga} options={{ headerShown: false }} />
                <Stack.Screen name='Sleep' component={Sleep} options={{ headerShown: false }} />
                <Stack.Screen name='Hydration' component={Hydration} options={{ headerShown: false }} />
                <Stack.Screen name='Workout' component={Workout} options={{ headerShown: false }} />
                <Stack.Screen name='Shop' component={Shop} options={{ headerShown: false }} />
                <Stack.Screen name='Product' component={Product} options={{ headerShown: false }} />
                <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
                <Stack.Screen name='Chatting' component={Chatting} options={{ headerShown: false }} />
                <Stack.Screen name='Cycling' component={Cycling} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}