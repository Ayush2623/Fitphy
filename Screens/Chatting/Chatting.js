import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, StatusBar, TextInput } from "react-native";
const arrow = require('../../assets/images/arrow.png');
const search = require('../../assets/images/searchIcon.png');

export default function Chatting({ navigation }) {

    const [SearchScrn, setSearchScrn] = React.useState(false);

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
                            Messages
                        </Text>
                    </View>
                    <View style={{
                        marginTop: -50
                    }}>
                        <StatusBar style='auto' />
                        {SearchScrn ?
                            <View style={{
                                marginTop: 45,
                            }}>
                                <View style={{
                                    flex: 1,
                                    padding: 10,
                                }}>
                                    <View style={{
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 4,
                                        borderRadius: 10,
                                        height: 34,
                                        marginHorizontal: 10,
                                        alignItems: 'center'
                                    }}>
                                        <TouchableOpacity onPress={() => setSearchScrn(false)}>
                                            <Image source={arrow} style={styles.imageStyle} />
                                        </TouchableOpacity>
                                        <TextInput style={{
                                            color: 'black',
                                            width: '100%',
                                            fontSize: 16,
                                            marginLeft: 7,
                                            alignSelf: 'center'
                                        }}
                                            autoFocus
                                            placeholder='Search' />
                                    </View>
                                </View>
                            </View>
                            :
                            <>
                                <SearchWithFooter SearchScrn={SearchScrn} setSearchScrn={setSearchScrn} navigation={navigation} />
                            </>
                        }
                    </View> 
                    <View>

                    </View>
                </View>
            </View>
        </View>
    );
}

const SearchWithFooter = ({ SearchScrn, setSearchScrn, navigation }) => {
    return (
        <>
            <View style={{
                flex: 1,
                marginTop: 45,
            }}>
                <View style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 4,
                    borderRadius: 10,
                    height: 34,
                    margin: 10,
                }}>
                    <Image source={search} style={styles.imageStyle} />
                    <TextInput style={{
                        width: '100%',
                        color: 'black',
                        fontSize: 16,
                        marginLeft: 5,
                    }}
                        placeholder='Search'
                        onFocus={() => setSearchScrn(true)} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 20,
        width: 20,
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginLeft: 2,
    },
})