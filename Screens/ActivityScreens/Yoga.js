import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Calendar } from 'react-native-calendars';
import * as Progress from 'react-native-progress';

const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const yoga = require('../../assets/images/yoga.png');
const info = require('../../assets/images/info.png');

function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

export default function Yoga({ navigation }) {

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


    const mindData = 82;
    const stressData = 97;
    const focusData = 89;
    const strengthData = 76;

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

                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginTop: 20,
                    }}>
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

                        {/* health status cards 2 in each row */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>

                            {/* mindfulness */}
                            <View style={{
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 15,
                                borderRadius: 20,
                                alignContent: 'center',
                                alignItems: 'center',
                                marginBottom: 15,
                                width: '48%'
                            }}>
                                <View style={{ width: '100%' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Progress.Circle
                                            size={50}
                                            progress={mindData / 100}
                                            thickness={6}
                                            unfilledColor='#ededed'
                                            borderColor="#ededed"
                                            color='#FF3800'
                                            fill='white'
                                            direction='counter-clockwise'
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
                                            fontSize: 20,
                                            fontWeight: '600',
                                        }}>{mindData}%</Text>
                                    </View>
                                    <View style={{
                                        marginTop: 10,
                                        gap: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            opacity: 0.6,
                                        }}>
                                            Consciousness
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: '600',
                                                opacity: 0.9,
                                            }}>
                                                Mindfulness
                                            </Text>
                                            <TouchableOpacity>
                                                <Image source={info} style={{ height: 20, width: 20, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>

                            {/* Stress Reduction */}
                            <View style={{
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 15,
                                borderRadius: 20,
                                alignContent: 'center',
                                alignItems: 'center',
                                marginBottom: 15,
                                width: '48%'
                            }}>
                                <View style={{ width: '100%' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Progress.Circle
                                            size={50}
                                            progress={strengthData / 100}
                                            thickness={6}
                                            unfilledColor='#ededed'
                                            borderColor="#ededed"
                                            color='#00CED1'
                                            fill='white'
                                            direction='counter-clockwise'
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
                                            fontSize: 20,
                                            fontWeight: '600',
                                        }}>{stressData}%</Text>
                                    </View>
                                    <View style={{
                                        marginTop: 10,
                                        gap: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            opacity: 0.6,
                                        }}>
                                            Decrease in stress
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: '600',
                                                opacity: 0.9,
                                            }}>
                                                Stress
                                            </Text>
                                            <TouchableOpacity>
                                                <Image source={info} style={{ height: 20, width: 20, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>

                            {/* mindfulness */}
                            <View style={{
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 15,
                                borderRadius: 20,
                                alignContent: 'center',
                                alignItems: 'center',
                                marginBottom: 15,
                                width: '48%'
                            }}>
                                <View style={{ width: '100%' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Progress.Circle
                                            size={50}
                                            progress={focusData / 100}
                                            thickness={6}
                                            unfilledColor='#ededed'
                                            borderColor="#ededed"
                                            color='#50C878'
                                            fill='white'
                                            direction='counter-clockwise'
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
                                            fontSize: 20,
                                            fontWeight: '600',
                                        }}>{focusData}%</Text>
                                    </View>
                                    <View style={{
                                        marginTop: 10,
                                        gap: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            opacity: 0.6,
                                        }}>
                                            Increase in focus
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: '600',
                                                opacity: 0.9,
                                            }}>
                                                Focus
                                            </Text>
                                            <TouchableOpacity>
                                                <Image source={info} style={{ height: 20, width: 20, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>

                            {/* Stress Reduction */}
                            <View style={{
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 15,
                                borderRadius: 20,
                                alignContent: 'center',
                                alignItems: 'center',
                                marginBottom: 15,
                                width: '48%'
                            }}>
                                <View style={{ width: '100%' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Progress.Circle
                                            size={50}
                                            progress={strengthData / 100}
                                            thickness={6}
                                            unfilledColor='#ededed'
                                            borderColor="#ededed"
                                            color='#FFC72C'
                                            fill='white'
                                            direction='counter-clockwise'
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
                                            fontSize: 20,
                                            fontWeight: '600',
                                        }}>{strengthData}%</Text>
                                    </View>
                                    <View style={{
                                        marginTop: 10,
                                        gap: 5,
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            opacity: 0.6,
                                        }}>
                                            Decrease in stress
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: '600',
                                                opacity: 0.9,
                                            }}>
                                                Strength
                                            </Text>
                                            <TouchableOpacity>
                                                <Image source={info} style={{ height: 20, width: 20, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>

                        </View>


                    </View>
                </ScrollView>

            </View >
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
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
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
})