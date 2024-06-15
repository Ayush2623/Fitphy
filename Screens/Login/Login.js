import React, { useCallback } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';

const tick = require('../../assets/images/back.jpg');
const logo = require('../../assets/images/fitphy_logo.png');
const google = require('../../assets/images/google.png');
const apple = require('../../assets/images/apple.png');

import { useFonts } from 'expo-font';

export default function Login({ promptAsync }) {

    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../../assets/font/Poppins-Black.ttf'),
        'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            return;
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                source={tick}
                style={styles.image}
                blurRadius={20} />
            <View style={{
                flex: 1,
                alignItems: 'center',
                margin: 10,
            }}>
                <Text style={styles.tagline}>
                    FitPhy
                </Text>
                <Image source={logo}
                    style={styles.logo} />
                <View style={styles.loginForm}>
                    <Text style={{
                        fontSize: 30,
                        fontFamily: 'Poppins-Black',
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: '600',
                        opacity: 1,
                    }}>
                        Welcome
                    </Text>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: 'Poppins-Bold',
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: '600',
                        opacity: 1,
                    }}>
                        Take Control of Your Fitness Journey with FitPhy
                    </Text>
                    <TouchableOpacity onPress={() => promptAsync()}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            gap: 20,
                            backgroundColor: '#fff',
                            padding: 5,
                            borderRadius: 20,
                            width: 250,
                            marginTop: 50,
                        }}>
                            <Image source={google} style={{
                                height: 50,
                                width: 50,
                            }} />
                            <Text>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            gap: 20,
                            backgroundColor: 'black',
                            padding: 5,
                            borderRadius: 20,
                            width: 250,
                            marginTop: 20,
                        }}>
                            <Image source={apple} style={{
                                height: 50,
                                width: 50,
                                tintColor: '#fff',
                            }} />
                            <Text style={{
                                color: '#fff',
                            }}>
                                Continue with Apple
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        borderWidth: 1,
                        marginTop: 60,
                        marginBottom: 10,
                        opacity: 0.5,
                    }}>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Regular',
                        textAlign: 'center',
                        color: 'black',
                    }}>
                        Privacy Policy and Terms of Service
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: "absolute",
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'cover',
    },
    tagline: {
        position: 'absolute',
        fontSize: 35,
        alignSelf: 'flex-start',
        fontFamily: 'Poppins-Black',
        top: 50,
        color: '#fff',
        fontWeight: '600',
        margin: 6,
    },
    logo: {
        position: 'absolute',
        top: 130,
        height: 150,
        width: 150,
        zIndex: 1,
    },
    loginForm: {
        // flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '100%',
        height: 450,
        borderRadius: 30,
        top: 260,
        padding: 30,
        zIndex: 0,
    }
});