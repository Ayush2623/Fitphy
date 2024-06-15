import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const dumbell = require('../../assets/images/dumbbell.png');
const clock = require('../../assets/images/clock.png');
const pushups = require('../../assets/images/pushups.png');
const squats = require('../../assets/images/squats.png');


export default function Suggestion() {
    return (
        <View style={styles.sugBox}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                }}>
                    Suggested for you
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: '#fee2e3',
                    padding: 5,
                    borderRadius: 12,
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#fb2834',
                    }}>
                        View all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={{
                    flexDirection: 'row',
                    gap: 5,
                    overflow: 'scroll',
                    marginTop: 10,
                }}>
                    {recommendation.map((item) => (
                        <View key={item.title} style={{
                            height: 200,
                            width: 180,
                            backgroundColor: '#fff',
                            alignItems: 'flex-start',
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            padding: 20,
                            elevation: 5,
                            margin: 10,
                        }}>
                            <TouchableOpacity >
                                <View>
                                    <Image source={item.image} style={{
                                        height: 50,
                                        width: 50,
                                        marginBottom: 5,
                                    }} />
                                </View>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '600',
                                    opacity: 0.8,
                                }}>
                                    {item.title}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '400',
                                        opacity: 0.6,
                                    }}>{item.reps} Reps</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '400',
                                        opacity: 0.6,
                                    }}>&nbsp;{item.sets} Sets</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20,
                                }}>
                                    <Image source={clock} style={{
                                        height: 20,
                                        width: 20,
                                    }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        opacity: 0.7,
                                    }}>&nbsp;In {item.time} min.</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View >
    );
}

const recommendation = [
    { title: 'Dumbbell rows', image: dumbell, sets: '4', reps: '12', time: '20' },
    { title: 'Push Ups', image: pushups, sets: '3', reps: '12', time: '20' },
    { title: 'Squat Training', image: squats, sets: '2', reps: '10', time: '25' },
];

const styles = StyleSheet.create({
    sugBox: {
        flex: 1,
        margin: 10,
        marginBottom: 45,
    },
});