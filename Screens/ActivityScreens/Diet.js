import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Animated, Easing } from "react-native";
import { Calendar } from 'react-native-calendars';
import Svg, { Path, Line, Text as SvgText } from 'react-native-svg';
import * as Progress from 'react-native-progress';

const arrow = require('../../assets/images/arrow.png');
const logo = require('../../assets/images/fitphy_logo.png');
const up = require('../../assets/images/up.png');
const arrow2 = require('../../assets/images/arrow2.png');


function DatePicker({ visible, onDateSelected }) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <Calendar onDayPress={onDateSelected} />
            </View>
        </Modal>
    );
}

export default function Diet({ navigation }) {

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

    const dietData = [
        { protein: 370, crabs: 160, fat: 60, requiredPro: 640, requiredCrabs: 230, requiredFat: 160 },
    ];

    const foodData = [
        { name: 'White Rice', category: 'Lunch', protein: 20, carbs: 22, fat: 11, quantity: 2 },
        { name: 'Brown Bread', category: 'Breakfast', protein: 21, carbs: 20, fat: 21, quantity: 4 },
        { name: 'Milk', category: 'Breakfast', protein: 28, carbs: 22, fat: 19, quantity: 1 },
        { name: 'Daal', category: 'Dinner', protein: 19, carbs: 23, fat: 9, quantity: 2 },
        { name: 'Roti', category: 'Lunch', protein: 10, carbs: 9, fat: 8, quantity: 4 },
    ];

    const [showBreakfast, setShowBreakfast] = useState(false);
    const [showLunch, setShowLunch] = useState(false);
    const [showDinner, setShowDinner] = useState(false);

    const handleBreakfast = () => {
        setShowBreakfast(!showBreakfast);
    }
    const handleLunch = () => {
        setShowLunch(!showLunch);
    }
    const handleDinner = () => {
        setShowDinner(!showDinner);
    }


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
                            <View style={{
                                height: 120,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                alignSelf: 'flex-start',
                            }}>
                                {dietData.map((item, index) => (
                                    <Card data={item} index={index} key={item.crabs} />
                                ))}
                            </View>
                            <View style={{
                                alignContent: 'flex-start',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                gap: 10,
                                width: '55%'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'flex-start',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        height: 10,
                                        fontWeight: '600',
                                        backgroundColor: '#FEBE10',
                                        borderRadius: 20,
                                    }}>&nbsp;&nbsp;&nbsp;</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}>&nbsp;Protein</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}>&nbsp;&nbsp;&nbsp;324</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600',
                                        opacity: 0.6,
                                    }}>&nbsp;of 640</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'flex-start',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        height: 10,
                                        fontWeight: '600',
                                        backgroundColor: '#FF3800',
                                        borderRadius: 20,
                                    }}>&nbsp;&nbsp;&nbsp;</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}>&nbsp;Crabs</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}>&nbsp;&nbsp;&nbsp;124</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600',
                                        opacity: 0.6,
                                    }}>&nbsp;of 230</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'flex-start',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        height: 10,
                                        fontWeight: '600',
                                        backgroundColor: '#00CED1',
                                        borderRadius: 20,
                                    }}>&nbsp;&nbsp;&nbsp;</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}>&nbsp;Fats</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}>&nbsp;&nbsp;&nbsp;84</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600',
                                        opacity: 0.6,
                                    }}>&nbsp;of 160</Text>
                                </View>
                            </View>
                        </View>

                        {/* second card breakfast */}
                        <View style={styles.card}>
                            <View style={{
                                width: '100%',
                                padding: 5,
                            }}>
                                <TouchableOpacity onPress={handleBreakfast}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            gap: 3,
                                            alignContent: 'center',
                                            alignItems: 'baseline',
                                        }}>
                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: '600',
                                            }}>
                                                Breakfast: 28
                                            </Text>
                                            <Text style={{
                                                fontSize: 14,
                                                fontWeight: '400',
                                            }}>
                                                cal
                                            </Text>
                                        </View>
                                        <View>
                                            <Image source={arrow2} style={{
                                                height: 20,
                                                width: 20,
                                                resizeMode: 'contain',
                                                transform: [{ rotate: '180deg' }],
                                            }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {showBreakfast ?
                                    <View style={{
                                        marginTop: 10,
                                    }}>
                                        <BreakfastFoodData foodData={foodData} />

                                        <View style={{
                                            alignItems: 'center',
                                            alignContent: 'center',
                                        }}>
                                            <TouchableOpacity>
                                                <Text style={{
                                                    backgroundColor: '#eee',
                                                    padding: 5,
                                                    borderRadius: 10,
                                                    color: '#FF3800',
                                                    fontWeight: '500',
                                                }}>Add more intake</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    :
                                    <></>}
                            </View>
                        </View>

                        {/* third card lunch */}
                        <View style={styles.card}>
                            <View style={{
                                width: '100%',
                                padding: 5,
                            }}>
                                <TouchableOpacity onPress={handleLunch}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            gap: 3,
                                            alignContent: 'center',
                                            alignItems: 'baseline',
                                        }}>
                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: '600',
                                            }}>
                                                Lunch: 98
                                            </Text>
                                            <Text style={{
                                                fontSize: 14,
                                                fontWeight: '400',
                                            }}>
                                                cal
                                            </Text>
                                        </View>
                                        <View>
                                            <Image source={arrow2} style={{
                                                height: 20,
                                                width: 20,
                                                resizeMode: 'contain',
                                                transform: [{ rotate: '180deg' }],
                                            }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                {showLunch ?
                                    <View style={{
                                        marginTop: 10,
                                    }}>
                                        <LunchFoodData foodData={foodData} />

                                        <View style={{
                                            alignItems: 'center',
                                            alignContent: 'center',
                                        }}>
                                            <TouchableOpacity>
                                                <Text style={{
                                                    backgroundColor: '#eee',
                                                    padding: 5,
                                                    borderRadius: 10,
                                                    color: '#FF3800',
                                                    fontWeight: '500',
                                                }}>Add more intake</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    :
                                    <></>}

                            </View>

                        </View>

                        {/* fourth card dinner */}
                        <View style={styles.card}>
                            <View style={{
                                width: '100%',
                                padding: 5,
                            }}>
                                <TouchableOpacity onPress={handleDinner}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            gap: 3,
                                            alignContent: 'center',
                                            alignItems: 'baseline',
                                        }}>
                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: '600',
                                            }}>
                                                Dinner: 87
                                            </Text>
                                            <Text style={{
                                                fontSize: 14,
                                                fontWeight: '400',
                                            }}>
                                                cal
                                            </Text>
                                        </View>
                                        <View>
                                            <Image source={arrow2} style={{
                                                height: 20,
                                                width: 20,
                                                resizeMode: 'contain',
                                                transform: [{ rotate: '180deg' }],
                                            }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {showDinner ?
                                    <View style={{
                                        marginTop: 10,
                                    }}>
                                        <DinnerFoodData foodData={foodData} />

                                        <View style={{
                                            alignItems: 'center',
                                            alignContent: 'center',
                                        }}>
                                            <TouchableOpacity>
                                                <Text style={{
                                                    backgroundColor: '#eee',
                                                    padding: 5,
                                                    borderRadius: 10,
                                                    color: '#FF3800',
                                                    fontWeight: '500',
                                                }}>Add more intake</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    :
                                    <></>}
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    );
}

const Card = ({ data, index }) => {
    return (
        <View style={{
            margin: 5,
            flexDirection: 'row',
            alignContent: 'flex-start',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Progress.Circle
                size={120}
                progress={data.protein / data.requiredPro}
                thickness={8}
                unfilledColor='#ededed'
                borderColor="#ededed"
                color="#FEBE10"
                fill='white'
                // direction='counter-clockwise'
                strokeCap='round'
                style={{
                    shadowColor: 'grey',
                    shadowOffset: { width: 2, height: 2 },
                    elevation: 10,
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    position: 'absolute',
                    left: 5,
                }}
            />
            <Progress.Circle
                size={95}
                progress={data.crabs / data.requiredCrabs}
                thickness={8}
                unfilledColor='#ededed'
                borderColor="#ededed"
                color="#FF3800"
                fill='white'
                // direction='counter-clockwise'
                strokeCap='round'
                style={{
                    shadowColor: 'grey',
                    shadowOffset: { width: 2, height: 2 },
                    elevation: 10,
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    position: 'absolute',
                    left: 17,
                }}
            />
            <Progress.Circle
                size={70}
                progress={data.fat / data.requiredFat}
                thickness={8}
                unfilledColor='#ededed'
                borderColor="#ededed"
                color="#00CED1"
                fill='white'
                // direction='counter-clockwise'
                strokeCap='round'
                style={{
                    shadowColor: 'grey',
                    shadowOffset: { width: 2, height: 2 },
                    elevation: 10,
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    position: 'absolute',
                    left: 30,
                }}
            />
        </View>


    );
}

const BreakfastFoodData = ({ foodData }) => {
    const breakfastData = foodData
        .filter(item => item.category === 'Breakfast')
        .map(item => (
            <View key={item.name} style={{
                width: '100%',
            }}>
                <View style={{ height: 2, backgroundColor: '#eee', width: '100%' }}></View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                        }}>{item.name}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.7,
                        }}>{item.quantity} serving</Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Protein: {item.protein}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Carbs: {item.carbs}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Fat: {item.fat}</Text>
                    </View>
                </View>
            </View>
        ));

    return (
        <View>
            {breakfastData}
        </View>
    );
};

const LunchFoodData = ({ foodData }) => {
    const lunchData = foodData
        .filter(item => item.category === 'Lunch')
        .map(item => (
            <View key={item.name} style={{
                width: '100%',
            }}>
                <View style={{ height: 2, backgroundColor: '#eee', width: '100%' }}></View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                        }}>{item.name}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.7,
                        }}>{item.quantity} serving</Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Protein: {item.protein}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Carbs: {item.carbs}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Fat: {item.fat}</Text>
                    </View>
                </View>
            </View>
        ));

    return (
        <View>
            {lunchData}
        </View>
    );
};

const DinnerFoodData = ({ foodData }) => {
    const dinnerData = foodData
        .filter(item => item.category === 'Dinner')
        .map(item => (
            <View key={item.name} style={{
                width: '100%',
            }}>
                <View style={{ height: 2, backgroundColor: '#eee', width: '100%' }}></View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                        }}>{item.name}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.7,
                        }}>{item.quantity} serving</Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Protein: {item.protein}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Carbs: {item.carbs}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            opacity: 0.9,
                        }}>Fat: {item.fat}</Text>
                    </View>
                </View>
            </View>
        ));

    return (
        <View>
            {dinnerData}
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
})
