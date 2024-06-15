import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Footer from '../../Components/Footer/Footer';
const search = require('../../assets/images/searchIcon.png');
const arrow = require('../../assets/images/arrow.png');
const trainer = require('../../assets/sample/trainer.png');
const tick = require('../../assets/images/tickmark.png');
const fitness_video = require('../../assets/sample/fitness_video.jpg');
const fitness_video2 = require('../../assets/sample/fitness_video2.jpg');
const doctor = require('../../assets/sample/doctor.jpg');
const article = require('../../assets/sample/fitness_article.jpg');
const video_icon = require('../../assets/images/video.png');
const doc_icon = require('../../assets/images/doctor_icon.png');
const trainer_icon = require('../../assets/images/trainer_icon.png');
const read_icon = require('../../assets/images/read_icon.png');

export default function Search({ navigation }) {

    const [SearchScrn, setSearchScrn] = React.useState(false);

    return (
        <View style={styles.container}>
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
                            backgroundColor: '#eee',
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
                    backgroundColor: '#eee',
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
                <View style={{
                    borderColor: '#eee',
                    height: 30,
                    marginTop: 10,
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'scroll',
                    margin: 10,
                    marginBottom: 10,
                }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={{ paddingHorizontal: 2 }}>
                            <Text style={styles.textButton}>Doctors</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 2 }}>
                            <Text style={styles.textButton}>Trainers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 2 }}>
                            <Text style={styles.textButton}>Therapy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 2 }}>
                            <Text style={styles.textButton}>Sports</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 2 }}>
                            <Text style={styles.textButton}>Gym</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 2 }}>
                            <Text style={styles.textButton}>Yoga</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginBottom: 45,
                    }}>
                        <Cards data={data} />
                    </View>
                </ScrollView>
            </View >
            <Footer navigation={navigation} />
        </>
    )
}

const data = [
    { id: 1, category: 'trainer', image: trainer },
    { id: 2, category: 'doctor', image: doctor },
    { id: 3, category: 'article', image: article },
    { id: 4, category: 'video', image: fitness_video },
    { id: 5, category: 'video', image: fitness_video2 },
    { id: 6, category: 'trainer', image: trainer },
    { id: 7, category: 'doctor', image: doctor },
    { id: 8, category: 'article', image: article },
    { id: 9, category: 'video', image: fitness_video },
    { id: 10, category: 'video', image: fitness_video2 },
    { id: 11, category: 'article', image: article },
    { id: 12, category: 'article', image: article },
]

const Cards = ({ data }) => {

    const leftColumnData = data.filter((item) => item.category !== 'video');
    const rightColumnData = data.filter((item) => item.category === 'video');

    return (
        <View style={styles.cardContainer}>
            {/* First row */}
            <View style={styles.row}>
                {/* Left column */}
                <View style={styles.column}>
                    {leftColumnData.map((item) => (
                        <View key={item.id} style={styles.innerColumn}>
                            <Image source={item.image} style={styles.imageL1} />
                            {item.category === 'trainer' && (
                                <Image source={trainer_icon} style={styles.iconImage} />
                            )}
                            {item.category === 'doctor' && (
                                <Image source={doc_icon} style={styles.iconImage} />
                            )}
                            {item.category === 'article' && (
                                <Image source={read_icon} style={styles.iconImage} />
                            )}
                        </View>
                    ))}
                </View>

                {/* Right column */}
                <View style={styles.column}>
                    {rightColumnData.map((item) => (
                        <View key={item.id} style={styles.innerColumn}>
                            <Image source={item.image} style={styles.imageR1} />
                            <Image source={video_icon} style={styles.iconImage} />
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageStyle: {
        height: 20,
        width: 20,
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginLeft: 2,
    },
    textButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e84c4f',
        color: '#e84c4f',
        overflow: 'hidden',
        textAlign: 'center',
        minWidth: 60,
        maxWidth: 120,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    column: {

    },
    innerColumn: {

    },
    imageL1: {
        height: 120,
        width: 120,
        borderWidth: 1,
        borderColor: '#fff',
    },
    imageR1: {
        height: 240,
        width: 300,
        borderWidth: 1,
        borderColor: '#fff',
    },
    iconImage: {
        position: 'absolute',
        right: 8,
        height: 20,
        width: 20,
        top: 5,
    }
});
