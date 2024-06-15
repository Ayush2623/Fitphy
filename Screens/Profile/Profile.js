import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView, NativeModules } from 'react-native';
import { auth, db } from '../../firebaseConfig';
import { signOut, getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc } from "firebase/firestore";

const arrow = require('../../assets/images/arrow.png');
const arrow2 = require('../../assets/images/arrow2.png');
const avatar = require('../../assets/images/man.png');
const edit = require('../../assets/images/edit.png');
const reward = require('../../assets/images/reward.png');
const prize = require('../../assets/images/prize.png');
const profile = require('../../assets/images/user2.png');
const bell = require('../../assets/images/bell.png');
const info = require('../../assets/images/info.png');
const privacy = require('../../assets/images/privacy.png');
const settings = require('../../assets/images/settings.png');
const wallet = require('../../assets/images/wallet.png');
const question = require('../../assets/images/question.png');
const logout = require('../../assets/images/power-off.png');


export default function Profile({ navigation }) {

    const [userData, setUserData] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const userDocRef = doc(collection(db, 'users'), user.email);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    setUserData(userData);
                    setUserEmail(userData.email);
                    setUserName(userData.name);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleSignOut = async () => {
        try {
            await AsyncStorage.removeItem('@user')
            console.log('User Data Erased');
        } catch (e) {
            console.log(e);
        }

        signOut(auth)
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message));

        NativeModules.DevSettings.reload();
    }

    const deviceHeight = Dimensions.get("window").height;
    const navigationLinks = [
        { icon: profile, name: 'Personal', icon2: arrow2, path: 'ProfileSettings', action: '' },
        { icon: settings, name: 'General', icon2: arrow2, path: 'ProfileSettings', action: '' },
        { icon: bell, name: 'Notification', icon2: arrow2, path: 'ProfileSettings', action: '' },
        { icon: privacy, name: 'Privacy', icon2: arrow2, path: 'ProfileSettings', action: '' },
        { icon: wallet, name: 'Payments', icon2: arrow2, path: 'ProfileSettings', action: '' },
        { icon: question, name: 'Help', icon2: arrow2, path: 'ProfileSettings', action: '' },
        { icon: info, name: 'About', icon2: arrow2, path: 'ProfileSettings', action: '' },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.navContent}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={arrow} style={styles.navImg} />
                    </TouchableOpacity>
                    <Text style={styles.navText}>
                        Profile
                    </Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileContent}>
                    <TouchableOpacity style={styles.editImg}>
                        {userData ?
                            <Image source={avatar} style={styles.profileImg} />
                            :
                            <></>
                        }
                        <View style={styles.editIconView}>
                            <Image source={edit} style={styles.editIcon} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.profileText}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                        }}>
                            {userName}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            opacity: 0.6,
                        }}>
                            {userEmail}
                        </Text>
                    </View>
                    <View style={styles.prizeCards}>
                        <View style={styles.prizeContent}>
                            <View style={styles.rewardView}>
                                <Image source={prize} style={styles.rewardImg} />
                            </View>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '600',
                            }}>
                                #102
                            </Text>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: '600',
                                opacity: 0.6,
                            }}>
                                Rank
                            </Text>
                        </View>
                        <View style={styles.prizeContent}>
                            <View style={styles.rewardView}>
                                <Image source={reward} style={styles.rewardImg} />
                            </View>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '600',
                            }}>
                                306
                            </Text>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: '600',
                                opacity: 0.6,
                            }}>
                                Ponits
                            </Text>
                        </View>
                    </View>




                    <View style={{
                        backgroundColor: '#eee',
                        height: 2,
                        width: '100%',
                        margin: 15,
                    }}>
                    </View>




                    {/* navigation links start */}
                    <View style={styles.navBox}>
                        {navigationLinks.map((item) => (
                            <NavLink key={item.name} data={item} />
                        ))}
                        <View style={{
                            width: '100%',
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                                onPress={handleSignOut}>
                                <View style={{
                                    flexDirection: 'row',
                                    gap: 10,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Image source={logout}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }} />
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: '600',
                                        opacity: 0.8,
                                    }}>
                                        Logout
                                    </Text>
                                </View>
                                <Image source={arrow2}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        transform: [{ rotate: '180deg' }],
                                    }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const NavLink = ({ data }) => {
    return (
        <View style={{
            width: '100%',
        }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={data.icon}
                        style={{
                            height: 22,
                            width: 22,
                        }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        opacity: 0.8,
                    }}>
                        {data.name}
                    </Text>
                </View>
                <Image source={data.icon2}
                    style={{
                        height: 20,
                        width: 20,
                        transform: [{ rotate: '180deg' }],
                    }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navbar: {
        backgroundColor: '#fff',
    },
    navContent: {
        marginTop: 45,
        padding: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    navImg: {
        height: 30,
        width: 40,
    },
    navText: {
        fontSize: 22,
        marginLeft: 10,
        fontWeight: '500',
    },
    profileContent: {
        padding: 10,
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    editImg: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    editIconView: {
        height: 22,
        width: 22,
        position: 'absolute',
        alignSelf: 'center',
        bottom: -10,
        backgroundColor: '#5A4FCF',
        padding: 2,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    editIcon: {
        height: 15,
        width: 15,
        tintColor: '#fff',
        resizeMode: 'center',
    },
    profileText: {
        marginTop: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    prizeCards: {
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    rewardView: {
        backgroundColor: '#eee',
        height: 60,
        width: 60,
        padding: 10,
        borderRadius: 30,
    },
    rewardImg: {
        height: '100%',
        width: '100%',
    },
    prizeContent: {
        alignContent: 'center',
        alignItems: 'center',
    },
    navBox: {
        width: '100%',
        padding: 10,
        gap: 30,
    }
})