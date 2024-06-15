import React, { useState, useEffect, } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions, } from "react-native";
import { Calendar } from 'react-native-calendars';
import Svg, { Path, Line, Text as SvgText } from 'react-native-svg';

const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const heart = require('../../assets/images/heart_pulse.png');

function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

export default function HeartRate({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    const [isFullDataVisible, setisFullDataVisible] = useState(false);

    const toggleFulDataVisibility = () => {
        setisFullDataVisible(!isFullDataVisible);
    };


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


    const heartRateData = [55, 72, 80, 101, 92, 71, 89, 70, 55, 76, 86, 76, 82, 100, 64, 70, 64, 72, 85, 87, 92, 71, 89, 70];
    const timeData = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    const dataLength = heartRateData.length;
    const halfLength = Math.ceil(dataLength / 2);

    const leftColumn = heartRateData.slice(0, halfLength);
    const leftTimeColumn = timeData.slice(0, halfLength);
    const rightColumn = heartRateData.slice(halfLength);
    const rightTimeColumn = timeData.slice(halfLength);
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
                                <Image source={heart} style={{
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
                                        <TouchableOpacity>
                                            <Text>Daily</Text>
                                        </TouchableOpacity>
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
                                <LineGraph data={heartRateData} />
                            </View>
                            {/* graph ends */}

                        </View>

                        {/* heart rate data */}
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
                                    Data
                                </Text>
                                <TouchableOpacity>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <TouchableOpacity>
                                            <Text>Daily</Text>
                                        </TouchableOpacity>
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



                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                marginTop: 10,
                                marginBottom: 10,
                                backgroundColor: '#fec9cc',
                                padding: 10,
                                borderRadius: 10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: '#fd5c63',
                                    }}>Avg.</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: '#fd5c63',
                                    }}>75</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                }}>
                                    <Image source={up} style={{
                                        height: 10,
                                        width: 10,
                                        resizeMode: 'contain',
                                        opacity: 1,
                                        marginBottom: 2,
                                        transform: [{ rotate: '180deg' }],
                                        tintColor: '#EF0107',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: '#fd5c63',
                                    }}>Low</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: '#fd5c63',
                                    }}>55</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                }}>
                                    <Image source={up} style={{
                                        height: 10,
                                        width: 10,
                                        resizeMode: 'contain',
                                        opacity: 1,
                                        marginBottom: 2,
                                        tintColor: '#EF0107',
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: '#fd5c63',
                                    }}>High</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: '#fd5c63',
                                    }}>101</Text>
                                </View>
                            </View>


                            {isFullDataVisible ?
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                }}>
                                    <View style={{
                                        width: '50%',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {leftColumn.map((heartRate, index) => (
                                            <View key={index} style={{
                                                flexDirection: 'row',
                                                width: '90%',
                                                justifyContent: 'space-between',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#eee',
                                                padding: 5,
                                                margin: 5,
                                                borderRadius: 10,
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontWeight: '500',
                                                }}>{leftTimeColumn[index]}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontWeight: '500',
                                                }}>{heartRate}</Text>
                                            </View>
                                        ))}
                                    </View>
                                    <View style={{
                                        width: '50%',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {rightColumn.map((heartRate, index) => (
                                            <View key={index} style={{
                                                flexDirection: 'row',
                                                width: '90%',
                                                justifyContent: 'space-between',
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#eee',
                                                padding: 5,
                                                margin: 5,
                                                borderRadius: 10,
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontWeight: '500',
                                                }}>{rightTimeColumn[index]}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontWeight: '500',
                                                }}>{heartRate}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                                :
                                <></>
                            }

                            <TouchableOpacity onPress={toggleFulDataVisibility}>
                                <View style={{
                                    backgroundColor: '#eee',
                                    padding: 10,
                                    borderRadius: 10,
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 16,
                                        fontWeight: '500',
                                    }}>Show full data</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const LineGraph = ({ data }) => {
    const deviceWidth = Dimensions.get('window').width;
    const graphHeight = 200; // Maximum height of the graph
    const graphWidth = deviceWidth * 0.85; // Width of the graph
    const dataPoints = data.length; // Number of heart rate data points

    // Calculate the y-coordinate for a heart rate value
    const calculateY = (heartRate) => {
        const yRange = Math.max(...data) - Math.min(...data);
        const yRatio = (heartRate - Math.min(...data)) / yRange;
        return graphHeight - yRatio * graphHeight;
    };

    // Calculate the x-coordinate for a data point
    const calculateX = (index) => {
        const xInterval = graphWidth / (dataPoints - 1);
        return index * xInterval;
    };

    // Generate path data for the line graph
    const generatePathData = () => {
        let pathData = `M ${calculateX(0)} ${calculateY(data[0])}`;

        for (let i = 1; i < dataPoints; i++) {
            pathData += ` L ${calculateX(i)} ${calculateY(data[i])}`;
        }

        return pathData;
    };

    // Generate x-axis time labels
    // Generate x-axis time labels
    const generateTimeLabels = () => {
        const timeLabels: JSX.Element[] = [];

        const startHour = 0;
        const interval = 3;

        for (let i = startHour; i <= startHour + 24; i += interval) {
            const displayHour = i % 24;
            timeLabels.push(
                <SvgText
                    key={i}
                    x={calculateX(i)}
                    y={graphHeight + 20}
                    textAnchor="middle"
                    fontSize={10}
                    fill="#000"
                >
                    {`${displayHour}:00`}
                </SvgText>
            );
        }

        return timeLabels;
    };


    const generateHeartRateLabels = () => {
        const maxHeartRate = Math.max(...data);
        const minHeartRate = Math.min(...data);
        const thresholdMin = 60;
        const thresholdMax = 100;

        return (
            <>
                <SvgText
                    x={-5}
                    y={calculateY(maxHeartRate)}
                    textAnchor="end"
                    fontSize={10}
                    fill="#000"
                >
                    {maxHeartRate}
                </SvgText>
                <SvgText
                    x={-5}
                    y={calculateY(minHeartRate)}
                    textAnchor="end"
                    fontSize={10}
                    fill="#000"
                >
                    {minHeartRate}
                </SvgText>
                <Line
                    x1={0}
                    y1={calculateY(thresholdMin)}
                    x2={graphWidth}
                    y2={calculateY(thresholdMin)}
                    stroke="#ff0000"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                />
                <Line
                    x1={0}
                    y1={calculateY(thresholdMax)}
                    x2={graphWidth}
                    y2={calculateY(thresholdMax)}
                    stroke="#ff0000"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                />
            </>
        );
    };

    return (
        <View style={styles.graphContainer}>
            <Svg height={graphHeight + 40} width={graphWidth}>
                <Path
                    d={generatePathData()}
                    fill="none"
                    stroke="#0ab3e4"
                    strokeWidth={2}
                />

                {/* Add horizontal grid lines */}
                <Line
                    x1={0}
                    y1={graphHeight / 2}
                    x2={graphWidth}
                    y2={graphHeight / 2}
                    stroke="#ccc"
                    strokeWidth={1}
                />

                {/* Add y-axis heart rate range labels */}

                {/* Add x-axis time labels */}
            </Svg>
            <Svg height={graphHeight + 40} width={graphWidth + 6} style={{
                position: 'absolute',
                right: 0,
            }}>
                {generateHeartRateLabels()}
                {generateTimeLabels()}
            </Svg>
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
