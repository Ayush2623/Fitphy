import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function Header({ navigation }) {
    return (
        <View style={styles.header}>
            <HeaderTitle />
            <NotiImage navigation={navigation}/>
            <ProfileImage navigation={navigation}/>
        </View>
        
    );
    
}

const ProfileImage = ({navigation}) => (
    <TouchableOpacity onPress={() => navigation.navigate("Chatting")}>
    <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/chat.png')} style={styles.notiImage} />
    </View>
    </TouchableOpacity>
)

const HeaderTitle = () => (
    <View style={styles.title}>
        <Text style={styles.brandName}>FitPhy</Text>
    </View>
)

const NotiImage = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
    <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/Notification.png')} style={styles.notiImage} />
    </View>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    header: {
        padding: 15,
        marginTop: 30,
        marginBottom: -5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: '45%',
        width: '45%'
    },
    notiImage: {
        height: '50%',
        width: '50%'
    },
    imageContainer: {
        height: 50,
        width: 50,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    title: {
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: 'center',
    },
    brandName: {
        fontSize: 20,
        fontWeight: "700",
    }
});

