import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from "react-native";
import { Calendar } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';

const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const wave = require('../../assets/images/wave.png');
const bottle = require('../../assets/images/bottle.png');

function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

export default function Hydration({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        const currentDate = new Date();
        const date = currentDate.getDate();
        const currentDay = weekday[currentDate.getDay()];
        setCurrentDate(date.toString());
        setCurrentDay(currentDay.toLocaleString());
    }, []);

    const waterIntake = 2600;

    // Calculate the percentage of water intake
    const percentage = Math.round((waterIntake / 2800) * 100);

    // Calculate the height of the water container based on the percentage
    const containerHeight = (percentage * (Dimensions.get('window').height - 240)) / 100;
    const deviceHeight = Dimensions.get('window').height;
    return (
        <View style={styles.container}>
            <View style={styles.box}>



                {/* header start */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
                        <Image source={arrow} style={{
                            height: 40,
                            width: 30,
                            resizeMode: 'contain',
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={{
                                fontSize: 22,
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontWeight: '500',
                            }}>{currentDay}, {currentDate}</Text>
                            <View style={{
                                marginLeft: 10,
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image source={up} style={{
                                    height: 10,
                                    width: 10,
                                    resizeMode: 'contain',
                                    opacity: 0.6,
                                    marginBottom: 2,
                                }} />
                                <Image source={up} style={{
                                    height: 10,
                                    width: 10,
                                    resizeMode: 'contain',
                                    transform: [{ rotate: '180deg' }],
                                    opacity: 0.8,
                                }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={logo} style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                        }} />
                    </TouchableOpacity>
                </View>
                {/* header ends */}

                {/* calender modal start*/}
                <DatePicker
                    visible={modalVisible}
                    onDateSelected={() => setModalVisible(false)} />
                {/* calender modal ends*/}

                <View style={styles.cards}>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={styles.textHead}>Daily Goal</Text>
                            <Text style={styles.textDesc}>3000 ml</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.textHead}>Complete</Text>
                            <Text style={styles.textDesc}>1200 ml</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.textHead}>Status</Text>
                            <Text style={styles.textDesc}>Hydrated</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{
                height: containerHeight,
                maxHeight: deviceHeight - 240,
            }}>
                <Image source={wave} style={{
                    width: '100%',
                    resizeMode: 'cover',
                    position: 'absolute',
                    top: -60,
                    height: 60,
                }} />
                <LinearGradient
                    colors={['#06bcfb', '#4884ee']}
                    style={styles.linearGradient}>
                </LinearGradient>

            </View>
            <View style={{
                position: 'absolute',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 100,
                    fontWeight: '600',
                    top: deviceHeight / 3.5,
                }}>
                    {percentage}%
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    top: deviceHeight / 3.5,
                    color: '#0039a6',
                }}>
                    of 2800 ml
                </Text>
            </View>
            <View style={{
                position: 'absolute',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                top: deviceHeight - 50,
            }}>
                <TouchableOpacity style={{
                    padding: 5,
                    borderRadius: 20,
                    height: 80,
                    width: 80,
                    gap: 2,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={bottle} style={{
                        height: 40,
                        width: 40,
                        resizeMode: 'contain',
                    }} />
                    <Text>+200 ml</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    box: {
        marginTop: 45,
        flex: 1,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
    },
    cards: {
        flex: 1,
        marginTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    cardContent: {
        alignContent: 'center',
        alignItems: 'center',
        gap: 3,
    },
    textHead: {
        fontSize: 16,
        fontWeight: '500',
        opacity: 0.6,
    },
    textDesc: {
        fontSize: 17,
        fontWeight: '600',
    },
    linearGradient: {
        flex: 1,
    },
})