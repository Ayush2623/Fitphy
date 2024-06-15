import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Calendar } from 'react-native-calendars';
import Svg, { Path, Line, Text as SvgText } from 'react-native-svg';

const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const cycle = require('../../assets/images/cycle.png');
const fire = require('../../assets/images/fire.png');

function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

export default function Cycling({ navigation }) {

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

    const sleepData = [6, 4, 5, 6, 7, 8, 5]; //for week
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthSleepData = [8, 6, 6, 4, 5, 6, 4, 5, 6, 7, 8, 5, 6, 7, 8, 6, 4, 5, 6, 7, 8, 5, 5, 6, 4, 5, 6, 7, 8, 5]; // Dynamic steps data for month

    const [selectedValue, setSelectedValue] = useState('Weekly');
    const [graphmodalVisible, setgraphModalVisible] = useState(false);

    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        setgraphModalVisible(false);
    };

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
                            <View style={styles.cardL}>
                                <Image source={cycle} style={{
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
                                        7
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
                                        Today
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* second card graphs */}
                        <View style={styles.card2}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 22,
                                    fontWeight: '600',
                                    opacity: 0.8,
                                }}>
                                    Statistics
                                </Text>
                                <TouchableOpacity>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <TouchableOpacity onPress={() => setgraphModalVisible(true)}>
                                            <Text>{selectedValue || 'Week'}</Text>
                                        </TouchableOpacity>

                                        <Modal visible={graphmodalVisible} animationType="slide" transparent>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                    alignContent: 'center',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <View style={{
                                                        backgroundColor: '#fff',
                                                        padding: 20,
                                                        borderRadius: 10,
                                                        gap: 10,
                                                    }}>
                                                        <TouchableOpacity onPress={() => handleOptionSelect('Weekly')}
                                                            style={{
                                                                backgroundColor: '#e8f9fe',
                                                                padding: 10,
                                                                alignContent: 'center',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: 5,
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: '500',
                                                                    textAlignVertical: 'bottom',
                                                                    backgroundColor: '#e8f9fe',
                                                                    color: '#0ab3e4',
                                                                }}
                                                            >
                                                                Weekly
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => handleOptionSelect('Monthly')}
                                                            style={{
                                                                backgroundColor: '#e8f9fe',
                                                                padding: 10,
                                                                alignContent: 'center',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: 5,
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    fontSize: 16,
                                                                    fontWeight: '500',
                                                                    textAlignVertical: 'bottom',
                                                                    backgroundColor: '#e8f9fe',
                                                                    color: '#0ab3e4',
                                                                }}>
                                                                Monthly
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </Modal>
                                        <View style={{
                                            marginLeft: 10,
                                            alignContent: 'center',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Image source={up} style={{
                                                height: 7,
                                                width: 7,
                                                resizeMode: 'contain',
                                                opacity: 0.6,
                                                marginBottom: 2,
                                            }} />
                                            <Image source={up} style={{
                                                height: 7,
                                                width: 7,
                                                resizeMode: 'contain',
                                                transform: [{ rotate: '180deg' }],
                                                opacity: 0.8,
                                            }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* graph starts */}
                            <View style={{
                                flex: 1,
                            }}>
                                {selectedValue == 'Weekly' ?
                                    <BarGraph data={sleepData} dayNames={dayNames} />
                                    :
                                    <LineGraph data={monthSleepData} />
                                }
                            </View>
                            {/* graph ends */}

                        </View>


                    </View>
                </ScrollView>

            </View>
        </View>
    );
}

// bar graph
const BarGraph = ({ data, dayNames }) => {

    const [selectedBar, setSelectedBar] = useState(null);


    return (
        <View style={styles.graphContainer}>
            {data.map((value, index) => {
                const barHeight = (value / 8) * 200; // Scale the bar height based on the maximum value (10000 steps)
                const completedBarHeight = Math.min(barHeight, 200); // Limit the completed bar height to a maximum of 200 units
                const remainingBarHeight = 200 - completedBarHeight;

                const handleBarPress = () => {
                    setSelectedBar(index);
                };

                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.barContainer}
                        onPress={handleBarPress}
                        activeOpacity={0.7}
                    >
                        <View key={index} style={styles.barContainer}>
                            <View style={[styles.remainingBar, { height: remainingBarHeight }]} />
                            <View style={[styles.completedBar, { height: completedBarHeight }]} />
                            <Text style={styles.dayLabel}>{dayNames[index]}</Text>
                            {selectedBar === index && (
                                <View style={styles.stepsCountContainer}>
                                    <Text style={styles.stepsCountText}>{value}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// line graph
const LineGraph = ({ data }) => {
    const deviceWidth = Dimensions.get('window').width;
    const graphHeight = 200; // Maximum height of the graph
    const graphWidth = deviceWidth * 0.85; // Width of the graph
    const stepCount = data.length; // Number of steps data points

    // Calculate the maximum and minimum step counts
    const maxSteps = Math.max(...data);
    const minSteps = Math.min(...data);

    // Calculate the y-coordinate for a step count value
    const calculateY = (steps) => {
        const yRange = maxSteps - minSteps;
        const yRatio = (steps - minSteps) / yRange;
        return graphHeight - yRatio * graphHeight;
    };

    // Calculate the x-coordinate for a data point
    const calculateX = (index) => {
        const xInterval = graphWidth / (stepCount - 1);
        return index * xInterval;
    };

    // Generate path data for the line graph
    const generatePathData = () => {
        let pathData = `M ${calculateX(0)} ${calculateY(data[0])}`;

        for (let i = 1; i < stepCount; i++) {
            pathData += ` L ${calculateX(i)} ${calculateY(data[i])}`;
        }

        return pathData;
    };

    const generateDateLabels = () => {
        const dateLabels: JSX.Element[] = [];

        for (let i = 0; i < stepCount; i += 2) {
            dateLabels.push(
                <SvgText
                    key={i}
                    x={calculateX(i)}
                    y={graphHeight + 30}
                    textAnchor="middle"
                    fontSize={12}
                    fill="black"
                >
                    {i + 1}
                </SvgText>
            );
        }

        return dateLabels;
    };

    // State to track the selected step count
    const [selectedStepCount, setSelectedStepCount] = useState(null);

    // Event handler for tapping on the graph line
    const handleGraphLinePress = (index) => {
        const selectedCount = data[index];
        setSelectedStepCount(selectedCount);
    };

    return (
        <View style={styles.graphContainer}>
            <Svg height={graphHeight + 40} width={graphWidth}>
                <Path d={generatePathData()}
                    fill="none"
                    stroke="#0ab3e4"
                    strokeWidth={2}
                />

                {/* Add vertical grid lines */}
                {data.map((_, index) => (
                    <TouchableOpacity key={index}
                        activeOpacity={0.8}
                        onPress={() => handleGraphLinePress(index)}>
                        <Line
                            // key={index}
                            x1={calculateX(index)}
                            y1={0}
                            x2={calculateX(index)}
                            y2={graphHeight}
                            stroke="none"

                        />
                    </TouchableOpacity>
                ))}
                {/* date labels */}
                {generateDateLabels()}
            </Svg>
            {/* Display selected step count */}
            {selectedStepCount !== null && (
                <View style={styles.stepCountContainer}>
                    <Text style={styles.stepCountText}>
                        Steps: {selectedStepCount}
                    </Text>
                </View>
            )}
        </View>
    );
};


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
    card2: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'column',
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
        alignItems: 'flex-end',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 10,
    },
    graphContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 200,
        width: '100%',
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 50,
        marginBottom: 10,
    },
    barContainer: {
        flex: 1,
        alignItems: 'center',
    },
    completedBar: {
        backgroundColor: '#0ab3e4',
        width: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    remainingBar: {
        backgroundColor: '#e8f9fe',
        width: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    dayLabel: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 5,
    },
    stepsCountContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{ translateX: -12 }],
    },
    stepsCountText: {
        color: 'white',
        fontSize: 10,
    },
    stepCountContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 5,
        padding: 5,
    },
    stepCountText: {
        color: '#fff',
        fontSize: 14,
    },
})