import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Footer from '../../Components/Footer/Footer';
import { Tooltip } from 'react-native-paper';

const arrow = require('../../assets/images/arrow.png');
const search = require('../../assets/images/searchIcon.png');
const favourite = require('../../assets/images/fav.png');
const bag = require('../../assets/images/bag.png');
const shoes = require('../../assets/sample/shoes.jpg');
const suit = require('../../assets/sample/suit.jpg');


export default function Shop({ navigation }) {

    const products = [
        { id: 'AB123', price: 2500, image: suit },
        { id: 'AC123', price: 1500, image: suit },
        { id: 'AD123', price: 2700, image: suit },
        { id: 'AE123', price: 2200, image: suit },
        { id: 'AF123', price: 2900, image: suit },
        { id: 'AG123', price: 2000, image: suit },
    ];
    return (
        <View style={styles.container}>
            {/* navbar start */}
            <View style={styles.navBar}>
                <View style={{
                    marginTop: 45,
                }}>
                    <View style={styles.navContent}>
                        <View style={{
                            width: '32%',
                        }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                <Image source={arrow} style={{
                                    height: 30,
                                    width: 30,
                                    resizeMode: 'contain',
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: '32%',
                        }}>
                            <Text style={{
                                fontSize: 20,
                                alignSelf: 'center',
                                fontWeight: '600',
                            }}>
                                Shop
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            width: '32%',
                        }}>
                            <TouchableOpacity>
                                <Image source={search} style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: 'contain',
                                    marginRight: 8,
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={favourite} style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: 'contain',
                                    marginRight: 8,
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                                <Image source={bag} style={{
                                    height: 28,
                                    width: 28,
                                    resizeMode: 'contain',
                                    marginTop: 4,
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* navbar end */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* suggestion start */}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{
                            flexDirection: 'row',
                            height: 70,
                            alignContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>All</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Running</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Gym</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Nike</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Jordan</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>T-shirt</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Weights</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Shoes</Text>
                            </View>
                            <View style={styles.suggestionCard}>
                                <Text style={styles.suggestionText}>Suppliments</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/* suggestion end */}

                {/* adds view start*/}
                <View style={styles.addContainer}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '600',
                            }}>For you</Text>
                            <TouchableOpacity>
                                <Text style={{
                                    fontWeight: '500',
                                }}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            padding: 2,
                            justifyContent: 'space-between',
                        }}>

                            <View style={{
                                height: 200,
                                width: '55%',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 20,
                            }}>
                                <TouchableOpacity style={{
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                    zIndex: 999,
                                }}>
                                </TouchableOpacity>
                                <Image source={shoes} style={{
                                    height: '100%',
                                    width: '100%',
                                    resizeMode: 'cover',
                                    borderRadius: 20,
                                }} />
                                <View style={{
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                    backgroundColor: 'black',
                                    borderRadius: 20,
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    opacity: 0.4,
                                }}>
                                </View>
                                <View style={{
                                    backgroundColor: '#dedede',
                                    padding: 5,
                                    position: 'absolute',
                                    borderRadius: 10,
                                    top: 15,
                                    left: 15,
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                    }}>₹ 1500</Text>
                                </View>
                            </View>


                            <View style={{
                                height: 200,
                                width: '40%',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                    height: '48%',
                                    width: '100%',
                                    borderRadius: 20,
                                }}>
                                    <TouchableOpacity style={{
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        zIndex: 999,
                                    }}>
                                    </TouchableOpacity>
                                    <Image source={shoes} style={{
                                        height: '100%',
                                        width: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 20,
                                    }} />
                                    <View style={{
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        backgroundColor: 'black',
                                        borderRadius: 20,
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        opacity: 0.4,
                                    }}>
                                    </View>
                                    <View style={{
                                        backgroundColor: '#dedede',
                                        padding: 5,
                                        position: 'absolute',
                                        borderRadius: 10,
                                        top: 15,
                                        left: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                        }}>₹ 1500</Text>
                                    </View>
                                </View>
                                <View style={{
                                    height: '48%',
                                    width: '100%',
                                    borderRadius: 20,
                                }}>
                                    <TouchableOpacity style={{
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        zIndex: 999,
                                    }}>
                                    </TouchableOpacity>
                                    <Image source={shoes} style={{
                                        height: '100%',
                                        width: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 20,
                                    }} />
                                    <View style={{
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        backgroundColor: 'black',
                                        borderRadius: 20,
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        opacity: 0.4,
                                    }}>
                                    </View>
                                    <View style={{
                                        backgroundColor: '#dedede',
                                        padding: 5,
                                        position: 'absolute',
                                        borderRadius: 10,
                                        top: 15,
                                        left: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                        }}>₹ 1500</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* adds view end */}


                {/* all shop items start */}
                <AllProductCard data={products} navigation={navigation} />
                {/* all shop items end */}

            </ScrollView>
        </View >
    );
}

const AllProductCard = ({ data, navigation }) => {
    
    const rows: JSX.Element[] = [];

    for (let i = 0; i < data.length; i += 2) {
        const item1 = data[i];
        const item2 = data[i + 1];

        rows.push(
            <View style={styles.itemCards} key={item1.id}>
                {item1 &&
                    <View style={styles.itemCard} key={item1.id}>
                        <Image source={item1.image} style={styles.cardImage} />
                        <TouchableOpacity style={styles.favBtn}>
                            <Image source={favourite} style={styles.favImg} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate("Product")}>
                            <Text style={styles.buyText}>₹ {item1.price}</Text>
                            <Text style={styles.buyImg}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                }
                {item2 &&
                    <View style={styles.itemCard} key={item2.id}>
                        <Image source={item2.image} style={styles.cardImage} />
                        <TouchableOpacity style={styles.favBtn}>
                            <Image source={favourite} style={styles.favImg} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate("Product")}>
                            <Text style={styles.buyText}>₹ {item2.price}</Text>
                            <Text style={styles.buyImg}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }

    return (
        <View style={styles.addContainer}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '600',
                }}>Trending Items</Text>
            </View>
            {rows}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    navBar: {
        backgroundColor: '#fff',
        height: 100,
    },
    navContent: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    suggestionCard: {
        backgroundColor: '#fff',
        height: 40,
        minWidth: 50,
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    suggestionText: {
        fontWeight: '500'
    },
    addContainer: {
        marginTop: 10,
        margin: 15,
    },
    itemCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 180,
        width: '100%',
        borderRadius: 20,
        marginTop: 10,
    },
    itemCard: {
        width: '48%'
    },
    cardImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    favBtn: {
        position: 'absolute',
        margin: 10,
        backgroundColor: '#fff',
        height: 30,
        width: 30,
        borderRadius: 15,
        padding: 4,
        right: 5,
    },
    favImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    buyBtn: {
        position: 'absolute',
        margin: 10,
        backgroundColor: 'rgba(000, 000, 000, 0.5)',
        borderRadius: 15,
        padding: 4,
        bottom: 5,
        width: '90%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    buyImg: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
    },
    buyText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        opacity: 0.9,
        marginLeft: 5,
    }
})