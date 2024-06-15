import React from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';

const home = require('../../assets/images/home2.png');
const profile = require('../../assets/images/user2.png');
const heart = require('../../assets/images/fire2.png');
const bag = require('../../assets/images/gym2.png');
const searchIcon = require('../../assets/images/searchIcon.png');


export default function Footer({ navigation }) {
    return (
        <View style={styles.Footer}>
            <View style={styles.ButtonStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btnBack}>
                    <Image source={home} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")} style={styles.btnBack}>
                    <Image source={searchIcon} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonStyleM}>
                <TouchableOpacity onPress={() => navigation.navigate("Activity")} style={styles.btnBack}>
                    <Image source={heart} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("Shop")} style={styles.btnBack}>
                    <Image source={bag} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.btnBack}>
                    <Image source={profile} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    Footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 10,
        height: 50,
        width: '100%',
        borderWidth: 0.8,
        borderColor: '#f2f2f2',

    },
    ButtonStyle: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 1,
    },
    imageStyle: {
        height: 30,
        width: 25,
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        padding: 5,
    },
    ButtonStyleM: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 0,
    },
    imageStyleM: {
        height: 40,
        width: 40,
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        overflow: 'visible',
    },
    btnBack: {

    },
    btnBackM: {
        backgroundColor: '#fd5c63',
        padding: 10,
        borderRadius: 20,
    }
});
