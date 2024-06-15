import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Header navigation={navigation}/>
            <Main navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});
