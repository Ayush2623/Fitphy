import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Animated, PanResponder } from 'react-native';
const trainer = require('../../assets/sample/trainer.png');
const arrow = require('../../assets/images/arrow.png');

const Notification = ({ navigation }) => {
    const data = [
        { title: 'FitPhy', image: trainer, time: '3h', desc: 'Please have a glass of water to keep yourself hydrated.', id: '142571' },
        { title: 'FitPhy', image: trainer, time: '9h', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675172' },
        { title: 'FitPhy', image: trainer, time: '1d', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675123' },
        { title: 'FitPhy', image: trainer, time: '2d', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675112' },
        { title: 'FitPhy', image: trainer, time: '2w', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675170' },
        { title: 'FitPhy', image: trainer, time: '3w', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675154' },
        { title: 'FitPhy', image: trainer, time: '3w', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675178' },
        { title: 'FitPhy', image: trainer, time: '3w', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675109' },
        { title: 'FitPhy', image: trainer, time: '4w', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675199' },
        { title: 'FitPhy', image: trainer, time: '4w', desc: 'Recieved a new message from your trainer. Please check it out.', id: '675167' },
    ]

    const [showModel, setShowmodel] = useState(false);

    const handleNoti = () => {
        setShowmodel(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <View style={{
                        marginTop: 45,
                        flexDirection: 'row',
                        padding: 10,
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Image source={arrow} style={{
                                height: 30,
                                width: 40,
                            }} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 22,
                            marginLeft: 10,
                            fontWeight: '500',
                        }}>
                            Notification
                        </Text>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.notibox}>
                        {data.map((item) => (
                            <TouchableOpacity key={item.id} onLongPress={handleNoti}>
                                <Cards data={item} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                {showModel &&
                    <View style={styles.dltBox}>
                        <View style={styles.dltBoxBar}>
                        </View>
                        <TouchableOpacity style={styles.dltBtn}>
                            <Text style={styles.dltText}>Delete Notification</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    );
};

const Cards = ({ data }) => {

    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
        }}>
            <View style={{
                flex: 1,
                marginTop: 10,
                marginLeft: 10,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                gap: 15,
            }}>
                <Image source={data.image} style={{
                    height: 40,
                    width: 40,
                    borderRadius: 25,
                    marginTop: 5,
                }} />
                <View style={{
                    flexDirection: 'row',
                    width: '70%',
                    alignContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                    }}>{data.title},&nbsp;
                        <Text ellipsizeMode='tail'
                            numberOfLines={2}
                            style={{
                                fontWeight: '400',
                            }}>
                            {data.desc}&nbsp;&nbsp;
                        </Text>
                        <Text>{data.time}</Text>
                    </Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    notibox: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    dltBox: {
        position: 'absolute',
        backgroundColor: 'rgba(000, 000, 000, 0.1)',
        height: 90,
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
    },
    dltBoxBar: {
        backgroundColor: '#000',
        height: 3,
        width: 60,
        alignSelf: 'center',
        marginTop: -10,
        borderRadius: 2,
    },
    dltBtn: {
        height: 20,
        marginTop: 20,
        alignSelf: 'center',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    dltText: {
        fontSize: 16,
        fontWeight: '400',
    }
});

export default Notification;