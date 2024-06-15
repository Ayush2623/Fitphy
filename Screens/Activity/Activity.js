import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const walk = require('../../assets/images/walk.png');
const yoga = require('../../assets/images/yoga.png');
const cycle = require('../../assets/images/cycle.png');
const gymIcon = require('../../assets/images/gymIcon.png');
const sleep = require('../../assets/images/zzz.png');
const water = require('../../assets/images/water.png');
const heart = require('../../assets/images/heart_pulse.png');
const diet = require('../../assets/images/diet.png');

function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

const getCurrentWeek = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDay);
    const weekDays = [...Array(7)].map((_, index) => {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + index);
        return {
            day: currentDate.toLocaleString('en-US', { weekday: 'short' }).charAt(0),
            date: currentDate.getDate(),
            isToday: index === currentDay
        };
    });
    return weekDays;
};

export default function Activity({ navigation }) {

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


    const [weekDays, setWeekDays] = useState(getCurrentWeek());

    const handlePress = (index) => {
        const updatedWeekDays = weekDays.map((item, idx) => ({
            ...item,
            isToday: idx === index
        }));
        setWeekDays(updatedWeekDays);
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>



                {/* header start */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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


                {/* calander dates start*/}
                <View style={{
                    flexDirection: 'row',
                    columnGap: 10,
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}>
                    {weekDays.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: item.isToday ? '#fd5c63' : '#f2f2f2',
                                    padding: 5,
                                    borderRadius: 20,
                                    height: 70,
                                    width: 40,
                                }}
                            >
                                <Text style={{ textAlign: 'center', padding: 4, fontWeight: '500' }}>
                                    {item.day}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        backgroundColor: '#f2f2f2',
                                        fontSize: 16,
                                        borderRadius: 16,
                                        padding: 4,
                                        fontWeight: '500',
                                    }}
                                >
                                    {item.date}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <DatePicker
                    visible={modalVisible}
                    onDateSelected={() => setModalVisible(false)} />

                {/* activity cards */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cards}>
                        {/* first card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Walking")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={walk} style={{
                                        height: 40,
                                        width: 50,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Walking
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            8726
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;Steps
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#e8f9fe',
                                            color: '#0ab3e4',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            Today 11:45 AM
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* second card */}
                        <TouchableOpacity onPress={() => navigation.navigate("HeartRate")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={heart} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Heart Rate
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            76
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;bpm
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#fec9cc',
                                            color: '#fd5c63',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            5 min. ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* third card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Yoga")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={yoga} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Yoga
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            45
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;min.
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#fdebdf',
                                            color: '#9d4209',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            2 hr ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* fourth card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Sleep")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={sleep} style={{
                                        height: 30,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Sleep
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            6
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;hours
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#e8f9fe',
                                            color: '#0ab3e4',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            2 hr ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* fifth card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={gymIcon} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Workout
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            60
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;min.
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#fec9cc',
                                            color: '#fd5c63',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            4 hr ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* sixth card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Cycling")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={cycle} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Cycling
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            2
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;km
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#fdebdf',
                                            color: '#9d4209',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            1/2 hr ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* seventh card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Hydration")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={water} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Hydration
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            2
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;km
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#e8f9fe',
                                            color: '#0ab3e4',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            1/2 hr ago
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* eigth card */}
                        <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                            <View style={styles.card}>
                                <View style={styles.cardL}>
                                    <Image source={diet} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'contain',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        marginTop: 5,
                                    }}>
                                        Diet
                                    </Text>
                                </View>
                                <View style={styles.cardR}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 24,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                        }}>
                                            120
                                        </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            opacity: 0.5,
                                        }}>
                                            &nbsp;&nbsp;cal.
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: '500',
                                            textAlignVertical: 'bottom',
                                            backgroundColor: '#fec9cc',
                                            color: '#fd5c63',
                                            padding: 5,
                                            borderRadius: 10,
                                        }}>
                                            Today
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View >
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
    cardL: {
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        alignContent: 'center',
    },
    cardR: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 10,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
    },
});
