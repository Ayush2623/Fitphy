import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';

const arrow = require('../../assets/images/arrow.png');
const suit = require('../../assets/sample/suit.jpg');
const bin = require('../../assets/images/bin.png');


export default function Cart({ navigation }) {

    const cartItems = [
        { id: 121, name: 'T-shirt', desc: 'This is cotton made shirt from England. Color is Pink. Made for Girls and Women.', price: 1200, quantity: 1, image: suit },
        { id: 122, name: 'T-shirt', desc: 'This is cotton made shirt from England. Color is Pink. Made for Girls and Women.', price: 1200, quantity: 1, image: suit },
        { id: 123, name: 'T-shirt', desc: 'This is cotton made shirt from England. Color is Pink. Made for Girls and Women.', price: 1200, quantity: 1, image: suit },
        { id: 124, name: 'T-shirt', desc: 'This is cotton made shirt from England. Color is Pink. Made for Girls and Women.', price: 1200, quantity: 1, image: suit },
        { id: 125, name: 'T-shirt', desc: 'This is cotton made shirt from England. Color is Pink. Made for Girls and Women.', price: 1200, quantity: 1, image: suit },
        { id: 126, name: 'T-shirt', desc: 'This is cotton made shirt from England. Color is Pink. Made for Girls and Women.', price: 1200, quantity: 1, image: suit },

    ];

    return (
        <View style={styles.container}>
            {/* navbar start */}
            <View style={styles.navBar}>
                <View style={{
                    marginTop: 45,
                }}>
                    <View style={styles.navContent}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                                <Image source={arrow} style={styles.backImg} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.navText}>
                                Cart
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* navbar end */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cartBox}>
                    {cartItems.map((item) => (
                        <ItemCard data={item} key={item.id} />
                    ))}
                </View>
            </ScrollView>
            <View style={styles.checkoutbox}>
                <View style={styles.coContent}>
                    <View style={{
                        height: 4,
                        width: 80,
                        alignSelf: 'center',
                        backgroundColor: '#fff',
                        marginTop: -10,
                        marginBottom: 5,
                        borderRadius: 2,
                    }}>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.amountText}>Subtotal</Text>
                        <Text style={styles.amountText}>₹ 12,000</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.amountText}>GST</Text>
                        <Text style={styles.amountText}>₹ 200</Text>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.amountText}>Discount</Text>
                        <Text style={styles.amountText}>₹ 600</Text>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: '#fff',
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.amountText}>Total</Text>
                        <Text style={styles.amountText}>₹11,800</Text>
                    </View>
                    <TouchableOpacity style={styles.checkBtn}>
                        <Text style={styles.checkText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const ItemCard = ({ data }) => {

    return (
        <View style={styles.itemCard}>
            <View style={styles.cardContent}>
                <Image source={data.image} style={styles.itemImg} />
                <View style={styles.cardRight}>
                    <Text style={styles.titleText} ellipsizeMode='tail' numberOfLines={1}>{data.name}</Text>
                    <Text style={styles.descText} ellipsizeMode='tail' numberOfLines={2}>{data.desc}</Text>
                    <View style={styles.itemBtns}>
                        <View style={styles.leftBtns}>
                            <TouchableOpacity style={styles.minusBtn} >
                                <Text style={{ color: '#fff', fontSize: 20, }}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.quantText}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>{data.quantity}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.plusBtn}>
                                <Text style={{ color: '#000', fontSize: 20, }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.binBtn}>
                                <Image source={bin} style={styles.binImg} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navBar: {
        backgroundColor: '#fff',
        height: 95,
    },
    navContent: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    backImg: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    navText: {
        fontSize: 22,
        alignSelf: 'center',
        fontWeight: '600',
    },
    cartBox: {
        flex: 1,
        marginTop: 5,
        padding: 10,
        marginBottom: 160,
    },
    itemCard: {
        width: '100%',
        height: 120,
        // backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
    },
    cardContent: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    itemImg: {
        height: 100,
        width: '26%',
        borderRadius: 10,
    },
    cardRight: {
        marginLeft: 10,
        width: '74%',
    },
    titleText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    descText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
    },
    itemBtns: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    binBtn: {
        height: 25,
        width: 25,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    binImg: {
        height: '100%',
        width: '100%',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
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
    leftBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginTop: 7,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 2,
    },
    checkoutbox: {
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(000, 000, 000, 0.8)',
        zIndex: 999,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: 180,
    },
    coContent: {
        padding: 20,
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    checkBtn: {
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '60%',
        height: 40,
        borderRadius: 20,
        marginTop: 15,
    },
    checkText: {
        fontSize: 18,
        color: '#000',
        alignContent: 'center',
        fontWeight: '500',
    },
    amountText: {
        color: '#fff',
    }
})