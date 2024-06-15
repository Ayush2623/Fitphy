import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const arrow = require('../../assets/images/arrow.png');
const star = require('../../assets/images/Star.png');
const favourite = require('../../assets/images/fav.png');
const bag = require('../../assets/images/bag.png');
const suit = require('../../assets/sample/suit.jpg');

export default function Product({ navigation }) {

    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;

    const totalRating = 5; // Number of stars to display
    const productRating = 3; // Number of stars to tint

    const [itemQuant, setItemQuant] = useState(1); // Initial quantity

    const subQuant = () => {
        if (itemQuant > 1) {
            setItemQuant(itemQuant - 1);
        }
    };

    const addQuant = () => {
        setItemQuant(itemQuant + 1);
    };

    const [selectedSize, setSelectedSize] = useState('M');
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            {/* background product image start*/}
            <View style={{
                flex: 1,
            }}>
                <Image source={suit} style={{
                    flex: 1,
                    resizeMode: 'cover',
                    height: deviceHeight,
                    width: deviceWidth,
                }} />
            </View>
            {/* background product image end */}

            {/* navbar start */}
            <View style={styles.navBar}>
                <View style={styles.navBarContent}>
                    <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                        <View style={styles.navImgBox}>
                            <Image source={arrow} style={styles.navImg} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.navBarContent}>
                    <TouchableOpacity>
                        <View style={styles.navImgBox}>
                            <Image source={favourite} style={styles.navImg} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("Cart")}>
                        <View style={styles.navImgBox}>
                            <Image source={bag} style={styles.navImg} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* navbar end */}

            {/* buy product card start */}
            <View style={[styles.buyDiv, { height: deviceHeight * 47 / 100, width: deviceWidth - 35 }]}>
                <View style={{
                    alignContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    height: 5,
                    width: 80,
                    backgroundColor: '#000',
                    zIndex: 999,
                    marginTop: -10,
                    marginBottom: 10,
                    borderRadius: 30,
                }}></View>
                <Text style={styles.productTitle}>Gym Suit for Girls (Louis Vuitton)</Text>

                <View style={styles.addDiv}>
                    <View>
                        <View style={styles.starBox}>
                            {[...Array(totalRating)].map((_, index) => (
                                <Image
                                    key={index}
                                    source={star}
                                    style={[
                                        styles.stars,
                                        { tintColor: index < productRating ? '#FFD700' : '#FFFFFF' },
                                    ]}
                                />
                            ))}
                        </View>
                        <View>
                            <Text style={styles.smallText}>(125k Reviews)</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'black',
                        height: 38,
                        width: 100,
                        borderRadius: 50,
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                    }}>
                        <TouchableOpacity style={styles.minusBtn} onPress={subQuant}>
                            <Text style={{ color: '#fff', fontSize: 20, }}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quantText}>
                            <Text style={{ color: '#fff', fontSize: 16, }}>{itemQuant}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.plusBtn} onPress={addQuant}>
                            <Text style={{ color: '#000', fontSize: 20, }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginTop: 15,
                    marginBottom: 10,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                    }}>SIZE {selectedSize}</Text>
                </View>
                <View style={styles.sizeDiv}>
                    <TouchableOpacity style={[styles.sizeBtn, selectedSize === 'S' && { backgroundColor: '#000' }]} onPress={() => handleSizeSelection('S')}>
                        <Text style={[styles.sizeText, selectedSize === 'S' && { color: '#fff' }]}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sizeBtn, selectedSize === 'M' && { backgroundColor: '#000' }]} onPress={() => handleSizeSelection('M')}>
                        <Text style={[styles.sizeText, selectedSize === 'M' && { color: '#fff' }]}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sizeBtn, selectedSize === 'L' && { backgroundColor: '#000' }]} onPress={() => handleSizeSelection('L')}>
                        <Text style={[styles.sizeText, selectedSize === 'L' && { color: '#fff' }]}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sizeBtn, selectedSize === 'XL' && { backgroundColor: '#000' }]} onPress={() => handleSizeSelection('XL')}>
                        <Text style={[styles.sizeText, selectedSize === 'XL' && { color: '#fff' }]}>XL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sizeBtn, selectedSize === 'XXL' && { backgroundColor: '#000' }]} onPress={() => handleSizeSelection('XXL')}>
                        <Text style={[styles.sizeText, selectedSize === 'XXL' && { color: '#fff' }]}>XXL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sizeBtn, selectedSize === '3XL' && { backgroundColor: '#000' }]} onPress={() => handleSizeSelection('3XL')}>
                        <Text style={[styles.sizeText, selectedSize === '3XL' && { color: '#fff' }]}>3XL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.descDiv}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                    }}>
                        Description
                    </Text>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '400',
                    }} ellipsizeMode='tail' numberOfLines={4}>
                        Ideal For - Women, Occasion - Wedding, Pattern - Solid, Color - Maroon, Type - Blazer and Pant Set,
                        Fabric - Polyester, Fit - Regular, Hand Wash, Style Code - Fomal Wine Solid Coat With High Waist Shorts
                    </Text>
                </View>

                <View style={styles.cartBox}>
                    <View>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: '600',
                            marginLeft: 20,
                            color: '#000'
                        }}>₹ 2100</Text>
                    </View>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        backgroundColor: '#000',
                        height: 40,
                        width: 120,
                        borderRadius: 20,
                        padding: 5,
                    }}>
                        <Text style={{
                            color: '#fff',
                        }}>Add to cart</Text>
                        <View style={{
                            height: 30,
                            width: 30,
                            backgroundColor: '#fff',
                            padding: 1,
                            borderRadius: 15,
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image source={arrow} style={{
                                height: 30,
                                width: 20,
                                transform: [{ rotate: '180deg' }]
                            }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* buy product card end */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navBar: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    navBarContent: {
        flexDirection: 'row',
        marginTop: 45,
        gap: 15,
    },
    navImgBox: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    navImg: {
        tintColor: '#fff',
        height: 20,
        width: 20,
        resizeMode: 'cover',
    },
    buyDiv: {
        flex: 1,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        // backgroundColor: '#fff',
        zIndex: 999,
        bottom: 20,
        borderRadius: 40,
        padding: 20,
    },
    productTitle: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
        fontWeight: '600',
    },
    starBox: {
        flexDirection: 'row',
        height: 24,
        marginTop: 10,
        gap: 5,
    },
    stars: {
        height: 20,
        width: 20,
    },
    smallText: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.8,
    },
    addDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 7,
    },
    minusBtn: {
        backgroundColor: '#424242',
        width: '33%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    plusBtn: {
        backgroundColor: '#fff',
        width: '33%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    quantText: {
        width: '33%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeDiv: {
        flexDirection: 'row',
        gap: 10,
    },
    sizeBtn: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
    },
    sizeText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    descDiv: {
        marginTop: 10,
    },
    cartBox: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    }
})