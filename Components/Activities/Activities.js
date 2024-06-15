import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
const walk = require('../../assets/images/walk.png');
const yoga = require('../../assets/images/yoga.png');
const cycle = require('../../assets/images/cycle.png');
const play = require('../../assets/images/play.png');
const sleep = require('../../assets/images/zzz.png');
const water = require('../../assets/images/water.png');
const heart = require('../../assets/images/heart_pulse.png');
import * as Progress from 'react-native-progress';


export default function Activities({ navigation }) {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                {data1.map((item, index) => (
                    <Card data={item} index={index} key={item.name} navigation={navigation} />
                ))}
            </View>
            <View style={{ flexDirection: 'row' }}>
                {data2.map((item, index) => (
                    <Card data={item} index={index} key={item.name} navigation={navigation} />
                ))}
            </View>
        </View>

    );
}
const data1 = [
    { name: 'Cycling', status: 85, lightColor: '#dad5fe', darkColor: '#8860a2', image: cycle, time: '20 min' },
    { name: 'Walking', status: 25, lightColor: '#d7f0f7', darkColor: '#aceafc', image: walk, time: '10 min' },
    { name: 'Yoga', status: 85, lightColor: '#f8e4d9', darkColor: '#fac5a4', image: yoga, time: '25 min' },
];
const data2 = [
    { name: 'Hydration', status: 90, lightColor: '#f8e4d9', darkColor: '#fac5a4', image: water, time: '25 min' },
    { name: 'Heart Rate', status: 92, lightColor: '#dad5fe', darkColor: '#8860a2', image: heart, time: '25 min' },
    { name: 'Sleep', status: 87, lightColor: '#d7f0f7', darkColor: '#aceafc', image: sleep, time: '6 h' },
]

const Card = ({ data, index, navigation }) => {
    return (
        <View style={{
            flex: index === 1 ? 1.05 : 1,
            height: index === 1 ? 180 : 160,
            padding: 10,
            alignSelf: 'center',
            backgroundColor: data.lightColor,
            margin: 5,
            borderRadius: 10,
            shadowColor: 'grey',
            shadowOffset: { width: -5, height: 5 },
            shadowRadius: 2,
            elevation: 10,
            justifyContent: 'space-evenly'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("Activity")}
                style={{
                    flex: 1,
                }}>
                <Image source={data.image} style={{ height: 25, width: 25 }} />
                <View style={{ alignSelf: 'center', margin: 5 }}>
                    <Progress.Circle
                        size={50}
                        progress={data.status / 100}
                        showsText
                        thickness={4}
                        unfilledColor='#ededed'
                        borderColor="#ededed"
                        color={data.darkColor}
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

                </View>
                <View>
                    <Text style={{ fontSize: 12, opacity: 0.7 }}>
                        Time    {data.time}
                    </Text>
                    <Text style={{ fontSize: 18, opacity: 0.6 }}>{data.status}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>{data.name}</Text>
                        <View style={{
                            backgroundColor: data.darkColor,
                            padding: 4,
                            borderRadius: 10,
                        }}>
                            <Image
                                source={play}
                                style={{
                                    height: 10,
                                    width: 10,
                                    resizeMode: 'contain'
                                }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});
