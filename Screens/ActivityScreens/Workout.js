import React, { useState, useEffect, } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions, } from "react-native";
import { Calendar } from 'react-native-calendars';
import * as Progress from 'react-native-progress';


const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const dumbell = require('../../assets/images/gymIcon.png');
const fullBody = require('../../assets/sample/fullBodyWorkout.jpg');
import { useFonts } from 'expo-font';


function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

export default function Workout({ navigation }) {

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/font/Poppins-BoldItalic.ttf'),
        'Rubik-Bold': require('../../assets/font/Rubik-Bold.ttf'),

    });

    const workoutTypes = [
        { name: 'Full Body', image: fullBody, link: 'fullBodyPageLink', completed: 60 },
        { name: 'Chest Muscle', image: fullBody, link: 'fullBodyPageLink', completed: 20 },
        { name: 'Back Muscle', image: fullBody, link: 'fullBodyPageLink', completed: 90 },
        { name: 'Leg Muscle', image: fullBody, link: 'fullBodyPageLink', completed: 75 },
        { name: 'Abdominal Muscle', image: fullBody, link: 'fullBodyPageLink', completed: 65 },
        { name: 'Bicep Muscle', image: fullBody, link: 'fullBodyPageLink', completed: 20 },
        { name: 'Tricep Muscle', image: fullBody, link: 'fullBodyPageLink', completed: 0 },

    ];


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


                {/* activity cards */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cards}>

                        {/* first card */}

                        <View style={styles.card}>
                            <View>
                                <Image source={dumbell} style={{
                                    height: 50,
                                    width: 50,
                                }} />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '600',
                                }}>
                                    Daily Workout Challange
                                </Text>
                            </View>
                            <View style={{
                                height: 60,
                                width: 60,
                                alignContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Progress.Circle
                                    size={60}
                                    progress={60 / 100}
                                    thickness={6}
                                    unfilledColor='#ededed'
                                    borderColor="#ededed"
                                    color='#E32636'
                                    fill='white'
                                    strokeCap='round'
                                    style={{
                                        shadowColor: 'grey',
                                        shadowOffset: { width: 2, height: 2 },
                                        elevation: 10,
                                        shadowOpacity: 0.1,
                                        shadowRadius: 1,
                                    }}
                                    textStyle={{ fontSize: 16, fontWeight: '600' }} />
                                <Text style={{
                                    position: 'absolute',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: 18,
                                    fontSize: 16,
                                    fontWeight: '600',
                                    color: '#E32636',
                                }}>
                                    60%
                                </Text>
                            </View>
                        </View>

                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            margin: 5,
                        }}>
                            Workout Programs
                        </Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{
                                flexDirection: 'row',
                                alignContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                margin: 5,
                                gap: 10,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fff',
                                    padding: 7,
                                    borderRadius: 20,
                                    minWidth: 40,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontWeight: '500',
                                    }}>
                                        All Type
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fff',
                                    padding: 7,
                                    borderRadius: 20,
                                    minWidth: 40,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontWeight: '500',
                                    }}>
                                        Chest
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fff',
                                    padding: 7,
                                    borderRadius: 20,
                                    minWidth: 40,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontWeight: '500',
                                    }}>
                                        Cardio
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fff',
                                    padding: 7,
                                    borderRadius: 20,
                                    minWidth: 40,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontWeight: '500',
                                    }}>
                                        Lower
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fff',
                                    padding: 7,
                                    borderRadius: 20,
                                    minWidth: 40,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontWeight: '500',
                                    }}>
                                        Back
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: '#fff',
                                    padding: 7,
                                    borderRadius: 20,
                                    minWidth: 40,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontWeight: '500',
                                    }}>
                                        Abs
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <View style={{
                            padding: 10,
                            marginTop: 10,
                            gap: 20,
                        }}>
                            {workoutTypes.map((item) => (
                                <ExerciseCard data={item} key={item.name} />
                            ))}
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const ExerciseCard = ({ data }) => {
    return (
        <View style={{
            height: 190,
            width: '100%',
            borderRadius: 20,
        }}>
            <Image source={data.image}
                style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'cover',
                    borderRadius: 20,
                }} />
            <View style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(000, 000, 000, 0.1)',
                borderRadius: 20,
                padding: 15,
            }}>
                <View>
                    <Text style={{
                        color: '#fff',
                        fontSize: 30,
                        fontWeight: '600',
                        fontFamily: 'Inter-Black',
                        width: '100%',
                    }}>
                        {data.name}
                    </Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 30,
                        fontWeight: '600',
                        fontFamily: 'Inter-Black',
                        opacity: 0.9,
                        marginTop: -12,
                    }}>
                        Exercise
                    </Text>

                    <TouchableOpacity style={{
                        height: 40,
                        backgroundColor: '#F0F8FF',
                        width: 130,
                        padding: 10,
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontFamily: 'Rubik-Bold',
                            fontSize: 14,
                        }}>
                            Start Workout
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 20,
                    bottom: 20,
                }}>
                    <Progress.Circle
                        size={60}
                        progress={data.completed / 100}
                        thickness={6}
                        unfilledColor='#999999'
                        borderColor="rgba(255, 255, 255, 0)"
                        color='#F0F8FF'
                        fill='rgba(255, 255, 255, 0)'
                        strokeCap='round'
                        style={{
                            shadowColor: 'grey',
                            shadowOffset: { width: 2, height: 2 },
                            elevation: 10,
                            shadowOpacity: 0.1,
                            shadowRadius: 1,
                        }}
                        textStyle={{ fontSize: 16, fontWeight: '600', color: '#fff' }} />
                    <Text style={{
                        position: 'absolute',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 18,
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#fff',
                    }}>
                        {data.completed}%
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
    },
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
})